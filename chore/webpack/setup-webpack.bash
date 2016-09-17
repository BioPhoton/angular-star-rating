#!/bin/bash

globalLibs="webpack webpack-dev-server"
localLibs="style-loader css-loader sass-loader node-sass ts-loader typescript ntypescript html-webpack-plugin ngtemplate-loader baggage-loader file-loader"

echo "Stetting up webpack environment"

echo "Installing global libs"

for globalLib in $globalLibs; do
    echo "Checking $globalLib..."

    programPath=$(which $globalLib);

    if [ -n "$programPath" ]; then
       echo "$globalLib is installed under: $programPath"
    else
       echo "Installing $globalLib globally"
       sudo npm install -g $globalLib
    fi
    echo ""
done

echo "Installing local libs under the development section"

for locallLib in $localLibs; do
    echo "Checking $globalLib..."

    programPath=$(which $locallLib);

    if [ -n "$programPath" ]; then
       echo "$locallLib is installed under: $programPath"
    else
       echo "Installing $locallLib locally"
       sudo npm install $locallLib --save-dev
    fi
    echo ""
done