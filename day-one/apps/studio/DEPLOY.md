# Deploy Sanity Studio

**Live studio:** https://bionixus-1.sanity.studio/

## Deploy (from repo root)

From the **project root** (`bio-nixus-insight`), run:

```bash
# If you're in a subfolder (e.g. sanity-content-uploader), go to repo root first:
cd /Users/selim/Documents/bio-nixus-insight

# Then deploy the studio
npm run studio:deploy
```

## Deploy schema only (e.g. after adding new fields)

```bash
cd /Users/selim/Documents/bio-nixus-insight
npm run studio:schema-deploy
```

## Manual path (if you prefer)

```bash
cd /Users/selim/Documents/bio-nixus-insight/day-one/apps/studio
npx sanity deploy
```
