#!/usr/bin/env sh

npm run docs

git add -A
git commit -m "docs: publish docs"
git push origin main
