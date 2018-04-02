# Continuous integration with angular
#### Implement continuous integration into your angular5 projects with travis and the command line

Not only large scale business apps but also libraries and small websites are under constant development. 
I know a few app that I delivered and never touche the code again. 
Nearly every project was setup with some kind of continouse integration. 

The idea of this blog series is to show you some cool tricks, plugins, tools and lessons learned from my investigations in continouse integration and delivery.


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
