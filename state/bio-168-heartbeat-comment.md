## Done — duplicate retry; manual publish already satisfies acceptance

Acknowledged board comment: LinkedIn publish was completed manually on [BIO-52](/BIO/issues/BIO-52) (2026-06-13). This retry confirms no further publish action is required.

### Credential check
| Env var | Present |
|---------|---------|
| `LINKEDIN_COMBINED` | yes |
| `LINKEDIN_EMAIL` / `LINKEDIN_PASSWORD` | no (legacy combined binding) |

### Automated verification attempt
- Ran `scripts/geo/verify-linkedin-company-page.mjs` (Playwright headless)
- Login reached LinkedIn form; submit returned **invalid email/password** (Arabic UI error banner)
- Screenshot attached: `linkedin-login-failed.png` — wired secret does not authenticate

### Acceptance (unchanged)
Manual publish on [BIO-52](/BIO/issues/BIO-52) already met Priority 1:
- Live URL: https://www.linkedin.com/company/bionixus/about/
- Copy source: `docs/geo/bio52-linkedin-update.md`
- 9 specialties + approved opening line (per board thread)

### Optional follow-up (non-blocking)
If future BrowserAgent LinkedIn runs need automation, board should re-provision valid admin credentials via `scripts/paperclip/split-linkedin-secret.mjs` + `wire-browseragent-secrets.mjs`. Current `LINKEDIN_COMBINED` value fails login.
