# Go High Level pipeline API — BioNixus weekly export

Issue context: [BIO-338](/BIO/issues/BIO-338) · [BIO-374](/BIO/issues/BIO-374) · Template: `ghl-q2-weekly-pipeline-export-first-week.md`

## Credentials (Paperclip secrets)

| Secret key | Required | Source |
|------------|----------|--------|
| `GHL_API_KEY` | Yes | GHL → Settings → Integrations → **Private Integrations** → create token with `opportunities.readonly` |
| `GHL_LOCATION_ID` | Yes | GHL location sub-account ID (Settings → Business Profile, or URL `.../location/{id}/...`) |

Optional read-only browser path (no API): `GHL_EMAIL`, `GHL_PASSWORD` — only if board selects read-only user on the BIO-338 access card.

## Wire secrets to CMO / HermesEngineer

Board session required (`paperclipai connect board` or `PAPERCLIP_BOARD_TOKEN`):

```bash
node scripts/paperclip/wire-ghl-secrets.mjs --dry-run   # verify secrets exist
node scripts/paperclip/wire-ghl-secrets.mjs             # bind to CMO + HermesEngineer
```

Bound env vars: `GHL_API_KEY`, `GHL_LOCATION_ID`.

## API surface (read-only)

Base URL: `https://services.leadconnectorhq.com`

Required headers on every request:

```
Authorization: Bearer <GHL_API_KEY>
Version: 2021-07-28
Accept: application/json
```

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/opportunities/pipelines?locationId={id}` | GET | Pipeline + stage names/IDs |
| `/opportunities/search?location_id={id}&status=open&limit=100&page={n}` | GET | Open opportunities (paginate) |
| `/opportunities/search?location_id={id}&status=won&limit=100&page={n}` | GET | Won opportunities (win rate) |
| `/opportunities/search?location_id={id}&status=lost&limit=100&page={n}` | GET | Lost opportunities (win rate) |

Private integration scope: **`opportunities.readonly`** (minimum).

Official reference: [HighLevel opportunities API](https://marketplace.gohighlevel.com/docs/ghl/opportunities/opportunities)

## Weekly export script

```bash
# Smoke test (auth + pipeline list only)
npm run ghl:pipeline-export -- --check

# JSON summary to stdout
npm run ghl:pipeline-export

# Markdown table snippet for CMO template
npm run ghl:pipeline-export -- --format markdown

# Write JSON artifact for issue attachment
npm run ghl:pipeline-export -- --out deliverables/ops/ghl-pipeline-snapshot.json
```

Env vars (from Paperclip adapter binding or local shell):

- `GHL_API_KEY`
- `GHL_LOCATION_ID`

Stage probabilities: `docs/ops/ghl-stage-probability-map.json` (first substring match on stage name; unmatched stages use `defaultProbability`).

## CMO handoff checklist

1. Board accepts **GHL access card** on [BIO-338](/BIO/issues/BIO-338) (API token path).
2. Board adds `GHL_API_KEY` + `GHL_LOCATION_ID` in Paperclip → Company Settings → Secrets.
3. Board runs `wire-ghl-secrets.mjs` (or asks CTO on next heartbeat).
4. CMO runs `npm run ghl:pipeline-export -- --format markdown` and pastes into `ghl-q2-weekly-pipeline-export-first-week.md`.
5. CMO verifies stage names map correctly; update `ghl-stage-probability-map.json` if GHL stage labels differ.
6. Attach weekly export to [BIO-338](/BIO/issues/BIO-338) for [BIO-186](/BIO/issues/BIO-186) scorecard inputs.

## CSV-only path

If board selects **weekly CSV** on the access card instead of API token, cancel [BIO-374](/BIO/issues/BIO-374) — no API wiring required. CMO populates the template from board-uploaded exports.
