#!/usr/bin/env node

const { cd, exec, echo, touch } = require('shelljs');
const { readFileSync } = require('fs');
const url = require('url');

let repoUrl;
let pkg = JSON.parse(readFileSync('package.json'));
repoUrl = pkg.repository.url;

let parsedUrl = url.parse(repoUrl);
let repository = (parsedUrl.host || "") + (parsedUrl.path || "")
let ghToken = process.env.GH_TOKEN

echo('Deploying docs!!!');
cd('docs');
touch('.fujia');
exec('git init');
exec('git add .');
exec('git config user.name "fujia"');
exec('git config user.email "fujia.site@outlook.com"');
exec('git commit -m "docs(docs): update gh-pages"');
exec(
  `git push --force --quiet "https://${ghToken}@${repository}" main:gh-pages`
)
echo("Docs deployed!!")
