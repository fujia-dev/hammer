#!/usr/bin/env sh

set -e
echo "Enter release version: "
read VERSION
read -p "Releasing $VERSION - are you sure?(y/n)" -n 1 -r
echo # move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # upgrade version
  git add -A
  git commit -m "[build] $VERSION"
  npm version $VERSION --message "[release] $VERSION"
  git push origin main

  # publish
  npm publish --access public
fi
