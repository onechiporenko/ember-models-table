#!/bin/bash

npm run build:gh-pages:docs

git checkout gh-pages
# from https://stackoverflow.com/questions/37890510/bash-script-to-check-if-the-current-git-branch-x
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" != "gh-pages" ]]; then
  echo 'Current branch is not "gh-pages"';
  exit 1;
fi
git rm -rf app addon config tests blueprints
git rm -rf package.json package-lock.json testem.json
git rm -rf .editorconfig .travis.yml

git rm -rf "v.3/docs"
mkdir "./v.3"
mkdir "./v.3/docs"
mv dist/docs/* "./v.3/docs"
rm -rf dist
git add v.3
git commit -m "Pushing docs v.3 to github pages"
git push origin gh-pages
git checkout master
