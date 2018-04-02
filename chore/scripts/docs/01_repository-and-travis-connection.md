## Step1 - Create a repository and connect it to travis

Open `github.com` in your browser. 
After log in click on `repositories -> new repository`.
Enter the required information and save it.

**Create an angular project**
Next let's initialize the projects angular and npm setup:
`ng new travis-ci-integration`

Follow the instructions:

Yes, No, Yes... Detailed answers here.

`cd .\travis-ci-integration\`
Test it! `npm start` => should `ng serve` the repo

Show commits =>  `git log`

![Git log initial commit](https://raw.githubusercontent.com/BioPhoton/travis-ci-integration/master/resources/git-log_initial-commit.PNG)


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

![Travis project enabled](https://raw.githubusercontent.com/BioPhoton/travis-ci-integration/master/resources/travis-ci_project-enabled.PNG)

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

Yay!! We successfully configured travis. Let's see how our job runs. To do so head over to your browser an open `https://travis-ci.org/` under your repositories your should see the running job of our repository.

![Git push initial commit](https://raw.githubusercontent.com/BioPhoton/travis-ci-integration/master/resources/git-push_initial.PNG)

When its done it should turn green like below.

![Travis job passed](https://raw.githubusercontent.com/BioPhoton/travis-ci-integration/master/resources/travis-ci_running-job.PNG)


Now after every new push we should trigger our job at travis again.
To test it just make some changes and `git push` them.

Now we can also test if the `travis-cli` works. Let's check the status of our repository on travis by running `travis status`.
We should see `build #1 passed` in our console.
 
So far so good.

Sets sum up what we did:
- setup an angular project
- connected it with a github repository
- initialized travis and configured it in the `.travis.yml` file
- we start a job on every push
- and are able to check the travis status over a cli command
