#!/bin/bash

ember build --prod
git checkout gh-pages
# from https://stackoverflow.com/questions/37890510/bash-script-to-check-if-the-current-git-branch-x
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" != "gh-pages" ]]; then
  echo 'Aborting script';
  exit 1;
fi
git rm -rf app addon config tests blueprints
git rm -rf Brocfile.js bower.json package.json package-lock.json testem.json
git rm -rf .bowerrc .editorconfig .jshintrc .travis.yml
git rm -rf v.2
mkdir ./v.2
mv dist/* ./v.2
rm -rf dist
git add .
git commit -m "Pushing v.2 to github pages"
git push origin gh-pages
git checkout master