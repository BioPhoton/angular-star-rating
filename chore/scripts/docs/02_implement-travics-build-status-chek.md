## Step 2 - Create script and implement check

Now everything works we can setup a script that checks the build status of our repo
and perform other actions based on this result.

In case of invalid status it should exits.

1. checking the job state of or repo on travis.
There are two options one with additional information about the build 
`travis status`
and one without 
`travis status --no-interactive`

Let me explain this command in detail.

Every Travis command takes three global options:

```
-h, --help                       Display help
-i, --[no-]interactive           be interactive and colorful
-E, --[no-]explode               don't rescue exceptions
```

The `--interactive` options determines whether to include additional information and colors in the output or not (no colors on Windows at all).
If you don't set this option explicitly, you will run in interactive mode if you invoke the command directly in a shell and in non-interactive mode if you pipe it somewhere.

`travis` as you know is our command related to the travis cli. 
`status` will check the state of the travis job configured in our `travis.yml` file of the current repository. 
As we want to receive just the state we and no additional information about the build 
we use the flag `--no-interactive`.

Run `travis status --no-interactive` in the console.

If every thing works we should see an output similar to this:
![Travis status command](https://raw.githubusercontent.com/BioPhoton/travis-ci-integration/master/resources/travis-ci_status-commands.PNG)

2. Create travis-check.js file.
Let's create a `chore` folder in the root that groups all our tooling scripts.
`cd` into the folder and create a file called `travis-check.js`. 

Now we need to do some imports and module exports. Just follow the script below:
```javascript
// chore/travis-check.js

'use strict'

// Import utils and promisify exec method
const util = require('util')
const exec = util.promisify(require('child_process').exec)
// Import path and create path to the dist folder
const path = require('path')
const distPath = path.join(__base, 'dist')
// Stor the value of the job state you want to check.
// In this case we want to check if the job state is "passed"
const validState = 'passed'

// Export the function as module
module.exports = travisCheck

function travisCheck () {
  
}

```

3. Implement check
```javascript
// chore/travis-check.js
...

function travisCheck () {
  // checks the status of the last build of the current repository
  // --no-interactive disables the interactive mode
  // source: https://github.com/travis-ci/travis.rb/blob/master/README.md
  return exec('travis status --no-interactive', {cwd: distPath})
      .then((result) => {
        // Check if the job state is "passed"
        if (result.stdout === validState) {
          return Promise.resolve(result)
        } else {
          return Promise.reject(result)
        }
      })      
}
```

Lets test the script. In your console `cd` into the repos root folder and type `node ./chore/travis-check.js`

4. Use the script
What we now are able to do is perform actions based on the travis state. 
For example we could publish to npm only if the travis check passes.

Therefor lets create another script called publish-npm.js
In this file we required the previously created travis-check module and execute our `npm publish` command in the then block.

What we achieved now is that we can only publish on np if the build status of our repository on travis is passed.

```
// chore/release.js

'use strict'
// Import util and promisify exec method
const util = require('util')
const exec = util.promisify(require('child_process').exec)

// import path and build required paths
const path = require('path')
const base = path.join(__base, 'chore', 'scripts', 'tasks')
// Import travisCheck
const travisCheck = require(path.join(base, 'travis-check'))

// set debug mode
process.env.DEBUG = true

// chain travisCheck with anything else
return Promise.resolve()
    .then(() => travisCheck())
    .then(() =>  console.log('Travis check passed')))
.catch((err) => console.info('release error'.red, err.red))

```

Done! :-)
We finished a minimal setup with travis, checked the build state and can now release our project based on the build state.

You can find the final code on github.com under [angular5-travis-ci-integreation](https://github.com/BioPhotone/travis-ci-integreation).
I also did some small refactorings and changed the folder structure, so the final code is a tiny bit more organized then here in the post.
