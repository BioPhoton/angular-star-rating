# Preconditions

node modules to install globally:
- conventional-recommended-bump
- conventional-changelog
- conventional-github-releaser
- conventional-commits-detector

`npm i -g color conventional-recommended-bump conventional-changelog conventional-github-releaser conventional-commits-detector`

# Travis CI - automated integration of travis into the build process

Travis is a continuous integration platform that provides free usage for open source projects.
Travis CI supports your development process by automatically building and testing code changes,
it provides feedback on the success of the change.
It can also automate other parts of your development process i.e. managing deployments.

This script checks the actual status of your travis project.
If you initialize travis over the cli it automatically checks the connected git repo and enables it in the platform.

In this article we will see how to setup a basic travis integration with angular 5.
We will start from scratch by creating a repository on github and initialize a new angular project.
Mostly of our work is done over the travis/angular/git cli's, so it should be pretty easy to follow.

**Preconditions:**

- github account
If you don't have already create an account on github.com/user
After the confirmation of you account you should be ready to go.

- git bash
You need a git cli running on your machine. If you are on a Windows OS you can use [git bash](https://git-for-windows.github.io/).

- travis-cli
Install travis-cli on your OS.
Find the travis-cli project on GitHub under [travis-ci](https://github.com/travis-ci/travis.rb).

- angular cli
To install the angular cli follow the steps on the [angular-cli](https://github.com/angular/angular-cli) repository.

Ok, ow we have installed all needed cli's and created the required accounts we can start straight away.
We will divide this article into two sections, 
First we will creation an repository and connecting it to travice and second we will implement a little helper script that checks our travis state. 

## Step1 - Create a repository and connect it to travice

Open `github.com` in your browser. 
After log in click on `repositories -> new repository`.
Enter the required information and save it.

**Create an angular project**
Next let's initialize the projects angular and npm setup:
`ng new travis-ci-integration`

Follow the instructions:

Yes, No, Yes...

`cd .\travis-ci-integration\`
Test it! `npm start` => should `ng serve` the repo

Show commits =>  `git log`

**Connect to github**
Open up your browser again and visit github.com.
On the main page of the repository you will see a button that says clone or download.
Click this button and copy the https url that is displayed.

Now switch to your console and type in following to add a remote url: 
`git remote add origin https://github.com/[YOUR_USERNAME]/[YOUR_PROJECT_NAME].git`

If no errors occur push the changes to git:
`git push -u origin master`

**Setup travis**
First lets create a `.travis-ci.yml` file.
Again we will use the cli for this:

in the root folder of the project type:
`travis init`

You should see a similar output in your console:
```
Detected repository as [YOUR_USERNAME]/[YOUR_PROJECT_NAME], is this correct? |yes| 
```

Type `yes` and hit enter.

```
repository not known to Travis CI (or no access?)
triggering sync: . done

Main programming language used: |Ruby|
```

Type `node` and hit enter

```
.travis.yml file created!
[YOUR_USERNAME]/[YOUR_PROJECT_NAME]: enabled :)
```

Now we should be ready to test it. 
First lets open travis.ci in our browser and switch to the repositories section.
We should see our project in the list of repositories already enabled.

PIC HERE!!!

Ok. Let's see if we did everything right. 
To our setup type `travis status` in the console.

You should get following message:
`no build yet for BioPhoton/travis-ci-integration`


**Configure the .travis.yml file**

Next we will setup the .travis.yml configurations. 

Open up the .travis.yml file and paste in following:
```
language: node_js

node_js:
- '8.6.0'

install:
  - npm install

script:
  - ng build -prod
```

This lines will declare the general languages that we use in this project,
it's versions as well as some additional steps in the travis build lifecycle.

The full list of steps in the build lifecycle looks like this:
1. OPTIONAL Install apt addons
2. OPTIONAL Install cache components
3. before_install
4. install
5. before_script
6. script
7. OPTIONAL before_cache (for cleaning up cache)
8. after_success or after_failure
9. OPTIONAL before_deploy
10. OPTIONAL deploy
11. OPTIONAL after_deploy
12. after_script

But in this small example we will focus on just 2 of them which are the 2 main steps for a build, `install` and `script`.
*install* install any dependencies required
*script* run the build script

Under the step `install` we have listed the `npm install` command. Obviously it installs all the npm packages.
Next we have the `script` step which will execute the `ng build -prod` command. This will build our angular application for production.

So far so good. Lets push our changes in `.travis.yml` to our repository

If we type `git status` into the console we will see that the `.travis.yml` is an iuntracked files in the repository. 
Let's add it be running `git add ./.travis.yml` in the console.

If We now run `git status` again we see that the file is now marked with green and appears under the changes to be committed.

To commit it just type `git commit -m "setup travis.yml"` and if everything is fine push it by running `git push` in the console.

## Step 2 - Create script and implement check

Now everything works we can setup a script that checks the build status of our repo.
In case of invalid status it should exits.

1. Create config file
2. Create travis-check.js file.
3. Implement check
4. Use check
i.e. publish on npm only if travis status in `passing`

Finished!
