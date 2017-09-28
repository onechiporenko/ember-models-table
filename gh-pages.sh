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
git rm -rf v.1
mkdir ./v.1
mv dist/* ./v.1
rm -rf dist
git add v.1
git commit -m "Pushing v.1 to github pages"
git push origin gh-pages
git checkout master