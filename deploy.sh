#!/usr/bin/env bash

# инициализация репозитория и загрузка кода на GitHub
git init

git add .

git commit -m "deploy"

git push -f https://github.com/Spektra135/Euclid.git master:gh-pages

cd -



