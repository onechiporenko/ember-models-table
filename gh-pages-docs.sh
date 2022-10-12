#!/bin/bash

yarn run build:gh-pages:docs

git checkout gh-pages
# from https://stackoverflow.com/questions/37890510/bash-script-to-check-if-the-current-git-branch-x
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if {@link  "$BRANCH" != "gh-pages" }; then
  echo 'Current branch is not "gh-pages"';
  exit 1;
fi
git rm -rf app addon config tests blueprints
git rm -rf package.json package-lock.json testem.json
git rm -rf .editorconfig .travis.yml

git rm -rf "v.4/docs"
mkdir "./v.4"
mkdir "./v.4/docs"
mv docs/* "./v.4/docs"
rm -rf dist
git add v.4
git commit -m "Pushing docs v.4 to github pages"
git push origin gh-pages
git checkout master
