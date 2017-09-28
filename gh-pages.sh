#!/bin/bash

ember build --prod
git checkout gh-pages
git rm -rf app addon config tests blueprints
git rm -rf Brocfile.js bower.json package.json package-lock.json testem.json
git rm -rf .bowerrc .editorconfig .jshintrc .travis.yml
rm -rf v.2
mkdir ./v.2
mv dist/* ./v.2
rm -rf dist
git add .
git commit -m "Pushing v.2 to github pages"
git push origin gh-pages
git checkout master