#!/usr/bin/env bash
set -euo pipefail
for f in $(find bionixus -name '*.sh'); do bash -n "$f"; done
command -v shellcheck >/dev/null && shellcheck $(find bionixus -name '*.sh') || true
# HermesEngineer stub must be gone
grep -q "No AGENTS instructions were resolved" bionixus/agents/hermesengineer/AGENTS.md \
  && { echo "FAIL: HermesEngineer still a stub"; exit 1; } || true
# Correct OpenRouter base URL everywhere
if grep -rEn 'openrouter\.ai/v1([^a-z]|$)' bionixus | grep -v '/api/v1'; then
  echo "FAIL: wrong OpenRouter base URL (missing /api/ segment)"; exit 1; fi
# No real keys
if grep -rEn 'sk-or-[A-Za-z0-9]{20,}' bionixus; then echo "FAIL: real key committed"; exit 1; fi
echo "All checks passed."
