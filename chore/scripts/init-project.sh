#!/bin/bash

directories="node_modules typings"
for directory in $directories; do
    echo Removing $directory && rm -rf $directory
done

echo Start installing local node modules
npm i
echo Start installing typings modules
typings install