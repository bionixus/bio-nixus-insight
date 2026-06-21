#!/usr/bin/env node
/**
 * Snapshot BioNixus execution gates: task WIP (≤5) and agent slots (≤3).
 * Outputs JSON + human-readable dispatch recommendations.
 *
 * Usage:
 *   node scripts/paperclip/tasks-control-dispatch.mjs
 *   node scripts/paperclip/tasks-control-dispatch.mjs --json
 */

const API = (process.env.PAPERCLIP_API_URL || 'http://127.0.0.1:3100').replace(/\/$/, '');
const KEY = process.env.PAPERCLIP_API_KEY;
const COMPANY_ID =
  process.env.PAPERCLIP_COMPANY_ID || 'd5ad71d4-38e1-4c76-9fe6-035bf40b13a1';

const MAX_TASK_WIP = 5;
const MAX_AGENT_SLOTS = 3;

const PRIORITY_RANK = { critical: 0, high: 1, medium: 2, low: 3 };

async function api(path) {
  const res = await fetch(`${API}${path}`, {
    headers: { Authorization: `Bearer ${KEY}` },
  });
  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = text;
  }
  if (!res.ok) throw new Error(`${res.status} ${path}: ${JSON.stringify(body)}`);
  return body;
}

function sortIssues(issues) {
  return [...issues].sort((a, b) => {
    const pr =
      (PRIORITY_RANK[a.priority] ?? 9) - (PRIORITY_RANK[b.priority] ?? 9);
    if (pr !== 0) return pr;
    return new Date(a.updatedAt || 0) - new Date(b.updatedAt || 0);
  });
}

async function main() {
  if (!KEY) {
    console.error('PAPERCLIP_API_KEY required');
    process.exit(1);
  }

  const [dashboard, inProgress, agents, todoHigh] = await Promise.all([
    api(`/api/companies/${COMPANY_ID}/dashboard`),
    api(`/api/companies/${COMPANY_ID}/issues?status=in_progress&limit=50`),
    api(`/api/companies/${COMPANY_ID}/agents`),
    api(
      `/api/companies/${COMPANY_ID}/issues?status=todo&limit=30`
    ),
  ]);

  const runningAgents = agents.filter((a) => a.status === 'running');
  const sortedIp = sortIssues(inProgress);
  const sortedTodo = sortIssues(
    todoHigh.filter((i) => i.priority === 'critical' || i.priority === 'high')
  );

  const taskWip = sortedIp.length;
  const agentSlots = runningAgents.length;

  const violations = [];
  const recommendations = [];

  if (taskWip > MAX_TASK_WIP) {
    violations.push(`task_wip:${taskWip}/${MAX_TASK_WIP}`);
    const keep = sortedIp.slice(0, MAX_TASK_WIP);
    const demote = sortedIp.slice(MAX_TASK_WIP);
    recommendations.push({
      action: 'demote_to_todo',
      issues: demote.map((i) => ({
        identifier: i.identifier,
        title: i.title,
        priority: i.priority,
        assigneeAgentId: i.assigneeAgentId,
      })),
      keep: keep.map((i) => i.identifier),
    });
  }

  if (agentSlots > MAX_AGENT_SLOTS) {
    violations.push(`agent_slots:${agentSlots}/${MAX_AGENT_SLOTS}`);
    const byName = (id) => agents.find((a) => a.id === id)?.name || id;
    recommendations.push({
      action: 'pause_agents',
      running: runningAgents.map((a) => ({
        id: a.id,
        name: a.name,
        urlKey: a.urlKey,
      })),
      note: `Pause ${agentSlots - MAX_AGENT_SLOTS} lowest-priority non-CEO runners until ≤${MAX_AGENT_SLOTS}`,
    });
  }

  if (taskWip < MAX_TASK_WIP && sortedTodo.length > 0) {
    const slots = MAX_TASK_WIP - taskWip;
    recommendations.push({
      action: 'promote_from_queue',
      candidates: sortedTodo.slice(0, slots).map((i) => ({
        identifier: i.identifier,
        title: i.title,
        priority: i.priority,
        assigneeAgentId: i.assigneeAgentId,
      })),
    });
  }

  const report = {
    generatedAt: new Date().toISOString(),
    limits: { maxTaskWip: MAX_TASK_WIP, maxAgentSlots: MAX_AGENT_SLOTS },
    snapshot: {
      dashboardTasksInProgress: dashboard?.tasks?.inProgress,
      taskWip,
      agentSlots,
      open: dashboard?.tasks?.open,
      blocked: dashboard?.tasks?.blocked,
    },
    inProgress: sortedIp.map((i) => ({
      identifier: i.identifier,
      title: i.title,
      priority: i.priority,
      assignee: agents.find((a) => a.id === i.assigneeAgentId)?.name,
    })),
    runningAgents: runningAgents.map((a) => ({
      name: a.name,
      urlKey: a.urlKey,
      id: a.id,
    })),
    violations,
    withinLimits: violations.length === 0,
    recommendations,
  };

  if (process.argv.includes('--json')) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  console.log('=== BioNixus Tasks Control Snapshot ===');
  console.log(`Task WIP: ${taskWip}/${MAX_TASK_WIP}`);
  console.log(`Agent slots: ${agentSlots}/${MAX_AGENT_SLOTS}`);
  console.log(`Within limits: ${report.withinLimits ? 'YES' : 'NO'}`);
  if (violations.length) console.log(`Violations: ${violations.join(', ')}`);
  console.log('\nIn progress:');
  for (const i of report.inProgress) {
    console.log(`  - ${i.identifier} [${i.priority}] ${i.assignee || 'unassigned'} — ${i.title}`);
  }
  console.log('\nRunning agents:');
  for (const a of report.runningAgents) {
    console.log(`  - ${a.name} (${a.urlKey})`);
  }
  if (recommendations.length) {
    console.log('\nRecommendations:');
    console.log(JSON.stringify(recommendations, null, 2));
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
