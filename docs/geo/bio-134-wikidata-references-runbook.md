# BIO-134 Runbook — Q140188264 P854 references + Commons logo copyright

Date: 2026-06-13  
Entity: [Q140188264](https://www.wikidata.org/wiki/Q140188264)  
Commons file: [File:BioNixus logo.webp](https://commons.wikimedia.org/wiki/File:BioNixus_logo.webp)

## Baseline (pre-fix)

| Check | Status | Evidence |
|-------|--------|----------|
| P856 references | 0 | wbgetentities 2026-06-13 |
| P571 references | 0 | wbgetentities 2026-06-13 |
| P159 references | 0 | wbgetentities 2026-06-13 |
| P101 references | 0 (all 3 statements) | wbgetentities 2026-06-13 |
| Commons logo | **Speedy delete / copyright violation** | Categories: Copyright violations, Non-free logos; invalid `{{CopyrightedFreeUseLogo}}` template |

## Source mapping (official + independent)

| Property | Claim | Official source | Independent source | Lens |
|----------|-------|-----------------|---------------------|------|
| P856 | https://www.bionixus.com | bionixus.com | [Greenbook listing](https://www.greenbook.org/company/BioNixus-Market-Research) | E-E-A-T |
| P571 | 2012 | [About page](https://www.bionixus.com/about) ("since 2012") | Greenbook (company profile) | Search Intent Alignment |
| P159 | Sheridan, WY (Q1017214) | About page (1309 Coffeen Ave, Sheridan) | Greenbook (Sheridan, WY HQ) | E-E-A-T |
| P101 | market research / pharma / health informatics | About page (services + therapeutic areas) | Greenbook (healthcare MR firm) | Topic Authority |

Greenbook is used as the independent directory source because Clutch/The Manifest return 403 to automated fetch; Greenbook publicly lists Sheridan HQ, services, and contact data consistent with the official site.

## Commons logo — licensing decision

**PD-textlogo: NOT viable.** Logo includes a multi-color heart icon, EKG waveform, and stylized typography — exceeds threshold of originality (Commons:Copyright rules by subject matter § Logos).

**Required path: VRT (formerly OTRS).**

1. Send permission email from an `@bionixus.com` address to `permissions@wikimedia.org` (template below).
2. Run `scripts/geo/add-bionixus-wikidata-references.py` — updates Commons page to `{{Awaiting OTRS}}` and removes invalid `{{CopyrightedFreeUseLogo}}`.
3. When VRT confirms, replace `{{Awaiting OTRS}}` with `{{VRT ticket|<id>|permissions@wikimedia.org}}` and appropriate license tag (`{{cc-zero}}` or `{{cc-by-sa-4.0}}` per granted terms).

### VRT permission email template

```
To: permissions@wikimedia.org
Subject: Permission to use BioNixus logo on Wikimedia Commons — Q140188264

I, [Name], [Title] at BioNixus, confirm that BioNixus holds the copyright to the logo
at https://commons.wikimedia.org/wiki/File:BioNixus_logo.webp and hereby grant permission
to publish it on Wikimedia Commons under the Creative Commons Zero (CC0 1.0) Public Domain
Dedication for use on Wikimedia projects including Wikidata item Q140188264.

File: BioNixus logo.webp
Entity: https://www.wikidata.org/wiki/Q140188264
Official site: https://www.bionixus.com

[Signature]
[Title]
BioNixus
admin@bionixus.com
```

## Execution

### Automated (preferred)

```bash
WIKIDATA_USERNAME=... WIKIDATA_PASSWORD=... python3 scripts/geo/add-bionixus-wikidata-references.py
```

Dry-run preview:

```bash
python3 scripts/geo/add-bionixus-wikidata-references.py --dry-run
```

Requires Paperclip secrets wired per [BIO-110](/BIO/issues/BIO-110) after board completes [BIO-107](/BIO/issues/BIO-107).

### QuickStatements fallback

Import `docs/geo/directory-audit/bio-134-wikidata-references.qs` at https://quickstatements.toolforge.org/

Commons page edit must still be done manually or via the Python script.

## Acceptance checklist

- [ ] ≥3 notability-critical claims have P854 references (P856, P571, P159 + P101 market research)
- [ ] Commons logo no longer tagged copyright violation / awaiting VRT confirmation
- [ ] Comment on [BIO-56](/BIO/issues/BIO-56) with edit permalinks

## Metrics baseline

Record diff URLs after execution:

- Wikidata history: https://www.wikidata.org/w/index.php?title=Q140188264&action=history
- Commons history: https://commons.wikimedia.org/w/index.php?title=File:BioNixus_logo.webp&action=history
