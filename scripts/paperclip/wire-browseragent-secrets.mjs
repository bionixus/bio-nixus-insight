#!/usr/bin/env node
/**
 * Bind Clutch + GBP Paperclip secrets to BrowserAgent adapterConfig.env.
 *
 * BOARD ONLY — requires secrets list + agent update permissions.
 *
 * Auth (pick one):
 *   - Logged-in Paperclip board session via `paperclipai connect board`
 *   - PAPERCLIP_API_URL + board bearer token in PAPERCLIP_BOARD_TOKEN
 *
 * Usage:
 *   node scripts/paperclip/wire-browseragent-secrets.mjs
 *   node scripts/paperclip/wire-browseragent-secrets.mjs --dry-run
 *   node scripts/paperclip/wire-browseragent-secrets.mjs --clear
 */

const COMPANY_ID='***';
const BROWSER_AGENT_ID='***';

const LLM_KEYS=[
  'CHATGPT_EMAIL',
  'CHATGPT_PASSWORD',
  'GOOGLE_GEMINI_EMAIL',
  'GOOGLE_GEMINI_PASSWORD',
  'GEMINI_EMAIL',
  'GEMINI_PASSWORD',
  'CLAUDE_EMAIL',
  'CLAUDE_PASSWORD',
];

const CLUTCH_GBP_KEYS=[
  'CLUTCH_EMAIL',
  'CLUTCH_PASSWORD',
  'GOOGLE_GBP_EMAIL',
  'GOOGLE_GBP_PASSWORD',
];

const LINKEDIN_KEYS=['LINKEDIN_EMAIL','LINKEDIN_PASSWORD'];
/** Legacy board secret key before split-linkedin-secret.mjs migration */
const LEGACY_LINKEDIN_SECRET_KEY='***';

const DIRECTORY_KEYS=[
  'DIRECTORY_SUBMISSION_PASSWORD',
  'DIRECTORY_SUBMISSION_EMAIL',
];

/**
 * Resolve env var → vault secret key bindings (Clutch/GBP + optional LinkedIn + directories).
 * Vault keys are normalized to uppercase for lookup (Paperclip stores lowercase keys).
 */
function resolveBindings(byKey){
  const bindings=[];

  for(const key of CLUTCH_GBP_KEYS){
    if(byKey.has(key)) bindings.push({envKey:key,secretKey:key});
  }

  if(LINKEDIN_KEYS.every((k)=>byKey.has(k))){
    for(const key of LINKEDIN_KEYS){
      bindings.push({envKey:key,secretKey:key});
    }
  } else if(byKey.has(LEGACY_LINKEDIN_SECRET_KEY)){
    bindings.push({envKey:'LINKEDIN_COMBINED',secretKey:LEGACY_LINKEDIN_SECRET_KEY});
  }

  for(const key of LLM_KEYS){
    if(byKey.has(key)) bindings.push({envKey:key,secretKey:key});
  }

  for(const key of DIRECTORY_KEYS){
    if(byKey.has(key)) bindings.push({envKey:key,secretKey:key});
  }

  return bindings.length>0?bindings:null;
}

const args=new Set(process.argv.slice(2));
const dryRun=args.has('--dry-run');
const clear=args.has('--clear');

const apiBase=(process.env.PAPERCLIP_API_URL||'http://127.0.0.1:3100').replace(/\/$/,'');
const token=process.env.PAPERCLIP_BOARD_TOKEN||process.env.PAPERCLIP_API_KEY;

async function api(path,options={}){
  const headers={
    'Content-Type':'application/json',
    ...(options.headers||{}),
  };
  if(token) headers.Authorization=`Bearer ${token}`;

  const res=await fetch(`${apiBase}${path}`,{
    ...options,
    headers,
  });
  const text=await res.text();
  let body;
  try{
    body=text?JSON.parse(text):null;
  }catch{
    body=text;
  }
  if(!res.ok){
    const msg=typeof body==='object'&&body?.error?body.error:text;
    throw new Error(`${options.method||'GET'} ${path} → ${res.status}: ${msg}`);
  }
  return body;
}

async function main(){
  if(clear){
    const payload={adapterConfig:{env:{}},replaceAdapterConfig:false};
    if(dryRun){
      console.log('[dry-run] Would PATCH BrowserAgent env to {}');
      return;
    }
    const agent=await api(`/api/agents/${BROWSER_AGENT_ID}`,{
      method:'PATCH',
      body:JSON.stringify(payload),
    });
    console.log('Cleared BrowserAgent env bindings.',agent.id);
    return;
  }

  const secrets=await api(`/api/companies/${COMPANY_ID}/secrets`);
  const list=Array.isArray(secrets)?secrets:secrets.items||secrets.secrets||[];
  const byKey=new Map(list.map((s)=>[String(s.key).toUpperCase(),s]));

  const bindings=resolveBindings(byKey);
  if(!bindings){
    console.error(
      'No bindable secrets found. Create at least one group in Paperclip UI:',
      [...CLUTCH_GBP_KEYS,'(optional)',...LINKEDIN_KEYS,'or legacy linkedin','(optional)',...LLM_KEYS,...DIRECTORY_KEYS].join(', '),
    );
    process.exit(1);
  }

  const missingClutchGbp=CLUTCH_GBP_KEYS.filter((k)=>!byKey.has(k));
  if(missingClutchGbp.length>0&&missingClutchGbp.length<CLUTCH_GBP_KEYS.length){
    console.warn('Partial Clutch/GBP set — binding only present keys:',missingClutchGbp.join(', '));
  }

  const env={};
  for(const {envKey,secretKey} of bindings){
    env[envKey]={
      type:'secret_ref',
      secretId:byKey.get(secretKey).id,
      version:'latest',
    };
  }

  const payload={
    adapterConfig:{env},
    replaceAdapterConfig:false,
  };

  if(dryRun){
    console.log(
      '[dry-run] Would bind env keys:',
      bindings.map((b)=>b.envKey).join(', '),
    );
    console.log(JSON.stringify(payload,null,2));
    return;
  }

  const agent=await api(`/api/agents/${BROWSER_AGENT_ID}`,{
    method:'PATCH',
    body:JSON.stringify(payload),
  });

  const bound=Object.keys(fromRecord(agent.adapterConfig)?.env||{});
  console.log('BrowserAgent secret wiring complete.');
  console.log('Bound env keys:',bound.sort().join(', ')||'(none)');
}

function fromRecord(value){
  return value&&typeof value==='object'&&!Array.isArray(value)?value:null;
}

main().catch((err)=>{
  console.error(err.message||err);
  process.exit(1);
});
