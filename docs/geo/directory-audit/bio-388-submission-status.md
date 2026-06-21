# BIO-388 Submission Status

**Owner:** CMO
**Targets:** GoodFirms, BusinessNetwork.co.uk, CitedX
**Inputs:** `tmp/bio-380/nap-master.md`, `directory-research.md`

## Verified outcome — 0/3 submissions completed

| Directory | Attempted | Verified confirmation | Current blocker |
|-----------|-----------|-----------------------|------------------|
| GoodFirms | Yes | No | Public /get-listed route does not expose submission form; app login/credential path required |
| BusinessNetwork.co.uk | Yes | No | Registration requires Cloudflare human verification; account creation step not completable by automation |
| CitedX | Yes | No | Bot-detection challenge prevents access to /add |

## Required to unblock
- Board/company authorization for account creation and NAP submission using `admin@bionixus.com`
- Manual click-through support for Cloudflare/hCaptcha challenges
- Approved alternate submission path or credentials for BusinessNetwork/CitedX

## Next action
Await external authorization; do not retry automated registration/submit loops.
