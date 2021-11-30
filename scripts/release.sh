#!/usr/bin/env sh

set -e
echo "Enter release version: "
read VERSION
read -p "Releasing $VERSION - are you sure?(y/n)" -n 1 -r
echo # move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Releasing $VERSION ..."

  npm version $VERSION --message "feat: release $VERSION"

  if [[ -z $RELEASE_TAG ]]; then
    npm publish --access public
  else
    npm publish --tag "$RELEASE_TAG"
  fi

  # upgrade version
  git add -A
  git commit --allow-empty -m "build: build $VERSION"
  git push origin main
fi
