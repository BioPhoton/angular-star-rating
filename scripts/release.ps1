# npm publish with goodies
# prerequisites:
# `npm install -g trash conventional-recommended-bump conventional-changelog conventional-github-releaser conventional-commits-detector json`
# `np` with optional argument `patch`/`minor`/`major`/`<version>`
# defaults to conventional-recommended-bump
# and optional argument preset `angular`/ `jquery` ...
# defaults to conventional-commits-detector

$ErrorActionPreference = "Stop"

# rebuilds and test the latest verstion of the repository (a succeeded travis build is precondition)

# checks the status of the last build of the current repository
# --no-interactive disables the interactive mode
# source: https://github.com/travis-ci/travis.rb/blob/master/README.md
$state = travis status --no-interactive
echo $state
if ( $state -ne "passed")
{
    Write-Host "Invalid travis state $state. State should be passed"  -foregroundcolor "red"
    Exit
}
Write-Host "checked travis state" -foregroundcolor "green"
# deletes the node_modules folder (move them into trash, more reversable)
# trash node_modules
Write-Host "trashed node_modules" -foregroundcolor "green"
# pulls the latest version
git pull --rebase
# installs the node dependencies
# npm install
# run unit tests
karma start karma.conf.js
Write-Host "run tests" -foregroundcolor "green"

# create changelog

# copy the src/package.json
# we copy it to have the initial state saved.
# we bump the version update the changelog
# after doing this we use the real package.json and do another version bump
# there to have change log and version bump in separate commits
Copy-Item .\src\package.json "src\_package.json"
# Detect what commit message convention your repository is using
# source: https://github.com/conventional-changelog/conventional-commits-detector/blob/master/README.md
# $preset stores the output of conventional-commits-detector which is angular
$preset = (conventional-commits-detector)
# echo prints a value to screen
# ensures that a convention was detected
echo $preset
# Detect the recommended bump type by the conventional-commit standard
# source: https://github.com/conventional-changelog-archived-repos/conventional-recommended-bump/blob/master/README.md
# $bump stores the recommended bump type
$bump = (conventional-recommended-bump -p angular)
# echo prints a value to screen
# ensures that a bump type was detected
echo $bump
# npm version $bump bumps the version specified in $bump and write the new data back to package.json
# If you run npm version in a git repo, it will also create a version commit and tag.
# This behavior is disabled by --no-git-tag-version
# the var $bump specifies the segment of the version code to bump
cd .\src
npm --no-git-tag-version version $bump
cd ..
# conventional-changelog creates a chagnelog markdown from commits
# -i Read the CHANGELOG from this file
# CHANGELOG.md it the name of the file to read from
# -s Outputting to the infile so you don't need to specify the same file as outfile
# -p Name of the preset you want to use. In this case it is angular that is stored in $preset
conventional-changelog -i CHANGELOG.md -s -p $preset
# add CHANGELOG.md to the commit
git add CHANGELOG.md
# get the content of package.json and json-parse the value
$package = (Get-Content ".\src\package.json" -Raw) | ConvertFrom-Json
$version = $package.version
# commit with comment
git commit -m"docs(CHANGELOG): $version"
# run build again because we want to have the new version in the dist folder
npm run build
# Replace the already bumped package.json with the _package.json initial copy
trash .\src\package.json
Rename-Item -Path ".\src\_package.json" -NewName "package.json"
Write-Host "created changelog $preset" -foregroundcolor "green"


# create version bump

# npm version $bump bumps the version specified in $bump and write the new data back to package.json
# -m will set a commit message with the version placed by %s
cd .\src
npm --no-git-tag-version version $bump
git add .\package.json
git commit -m "chore(release): $version ($bump)"
git tag $version
cd ..
# pushed the commit
# --follow-tags also pushed the new tags
# source: https://git-scm.com/docs/git-push
git push --follow-tags
Write-Host "pushed repo" -foregroundcolor "green"

# release on git and npm

# Make a new GitHub release from git metadata based on your commit-convention. In this case angular convention
# source: https://github.com/conventional-changelog/conventional-github-releaser/blob/master/README.md
conventional-github-releaser -p $preset
Write-Host "created github release"  -foregroundcolor "green"

# publish new version on npm
cd .\src
npm publish
Write-Host "published on npm :-)"  -foregroundcolor "green"
