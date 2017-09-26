#!/bin/bash

git branch -D gh-pages
git push origin --delete gh-pages
git checkout -b gh-pages

ember build --prod
git rm -rf app addon config tests blueprints
git rm -rf Brocfile.js bower.json package.json package-lock.json testem.json
git rm -rf .bowerrc .editorconfig .jshintrc .travis.yml
mkdir ./v.2
mv dist/* ./v.2/
rm -rf dist
git add .
git commit -m "Pushing v.2 to github pages"
git push origin gh-pages

git checkout master
rm -rf node-modules
npm i
git checkout package.json
rm -rf package-lock.json
ember build --prod
git checkout gh-pages
git rm -rf app addon config tests
git rm -rf Brocfile.js bower.json package.json package-lock.json testem.json
git rm -rf .bowerrc .editorconfig .jshintrc .travis.yml
mkdir ./v.1
mv dist/* ./v.1/
rm -rf dist
git add .
git commit -m "Publishing v.1 to github pages"
git push origin gh-pages
git checkout v2.0