#!/usr/bin/env bash
# One-time: build the site and push the 'hostinger' branch so Hostinger can deploy.
# Run from project root: ./scripts/create-hostinger-branch.sh

set -e

echo "Installing dependencies..."
npm ci --silent 2>/dev/null || npm install --silent
echo "Building site..."
npx vite build

if [ ! -d "dist" ]; then
  echo "Error: dist/ not found after build"
  exit 1
fi

echo "Creating hostinger branch with built files..."
# Copy dist to temp; git clean will remove dist/ so we need it elsewhere
DIST_BACKUP="${TMPDIR:-/tmp}/bionixus-dist-$$"
cp -r dist "$DIST_BACKUP"

git checkout --orphan hostinger
git reset --hard
git clean -fdx

rsync -a "$DIST_BACKUP/" .
rm -rf "$DIST_BACKUP"
git add -A
git commit -m "Deploy built site to hostinger branch"
git push origin hostinger --force

echo "Switching back to main..."
git checkout main

echo "Done. The 'hostinger' branch is on GitHub. You can now Deploy in Hostinger."
