#!/usr/bin/env bash
# Finishes the openGym personal PWA setup: creates the public `opengym` repo,
# pushes this build to its root, and enables GitHub Pages.
#
# Run on a machine with the `gh` CLI logged in (`gh auth status`).
#   bash FINISH-ON-YOUR-MAC.sh
set -euo pipefail

SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
STAGE="$(mktemp -d)/opengym"
mkdir -p "$STAGE"

# Copy only the built site — no .git, no helper files.
( cd "$SRC" && tar --exclude=./.git --exclude=./FINISH-ON-YOUR-MAC.sh \
    --exclude=./README.md -cf - . ) | ( cd "$STAGE" && tar -xf - )

cd "$STAGE"
git init -b main
git add -A
git commit -m "openGym personal PWA build"
gh repo create opengym --public --source=. --push

USER="$(gh api user -q .login)"
gh api -X POST "repos/$USER/opengym/pages" \
  -f "source[branch]=main" -f "source[path]=/" || \
  echo "Pages POST failed (may already be enabled) — check Settings > Pages."

URL="https://$USER.github.io/opengym/"
for i in $(seq 1 18); do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
  echo "$i: $code"
  [ "$code" = "200" ] && break
  sleep 10
done
echo
echo "Live URL: $URL"
