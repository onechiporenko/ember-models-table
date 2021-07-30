#!/bin/bash

if [[ "$1" != "bs3" && "$1" != "bs4" && "$1" != "paper" && "$1" != "plain-html" ]]; then
  echo 'Framework is not set. Allowed values: "bs3", "bs4", "paper", "plain-html"';
  exit 1;
fi
sed -i "s|.*ENV\.rootURL.*|\t\tENV.rootURL = '/ember-models-table/v.4/$1/';|" ./tests/dummy/config/environment.js
sed -i "s|.*const {.*|  const uiFramework = '$1';|" ./tests/dummy/app/instance-initializers/emt-inject.js

npm run build:gh-pages:$1
git checkout ./tests/dummy/config/environment.js
git checkout ./tests/dummy/app/instance-initializers/emt-inject.js

git checkout gh-pages
# from https://stackoverflow.com/questions/37890510/bash-script-to-check-if-the-current-git-branch-x
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" != "gh-pages" ]]; then
  echo 'Current branch is not "gh-pages"';
  exit 1;
fi
git rm -rf app addon config tests blueprints
git rm -rf package.json package-lock.json testem.json
git rm -rf .editorconfig .jshintrc .travis.yml
git rm -rf "v.4/$1"
mkdir ./v.4
mkdir "./v.4/$1"
mv dist/* "./v.4/$1"
rm -rf dist
git add v.4
git commit -m "Pushing $1 v.4 to github pages"
git push origin gh-pages
git checkout master
