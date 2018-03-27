# AngularStarRatingWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

**Create a workspace:**
1. Open the console and run `create-nx-workspace [workspaceName]`
2. cd into the folder [workspaceName]
**Create an app:**
1. Create new app in workspace `ng generate app [appName]`
2. Test the created app by running `ng serve --app=[appName]`
**Create a lib:**
1. Create a new lib by running `ng generate lib [libName]`
2. Create a component in the lib `ng generate component test --app=[libName] --export`
3. In `./apps/[appName]/src/app/[appName].module.ts` add the module of your lib. 
```typescritp
// /apps/[appName]/src/app/[appName].module.ts

[...]
import { [moduleClassName] } from '[workspaceName]/[libName]'

@NgModule({
  imports: [
    [...]
    [moduleClassName]
  ],
  [...]
})
export class AppModule {}

```
4. Use the component in `app.component.html`
```html
// /apps/[appName]/src/app/[appName].component.html
<[componentSelector]></[componentSelector]>
```
5. Test that the app can be served.

**Setup ng-packagr**
1. Install ng-packagr locally `npm install --save-dev ng-packagr`
2. Create a file `package.json` in `libs/[libName]` with following content.
```json
// libs/[libName]/package.json
{
  "$schema": "../../node_modules/ng-packagr/package.schema.json",
  "name": "[libName]",
  "version": "1.0.0",
  "ngPackage": {
    "lib": {
      "entryFile": "index.ts"
    },
    "dest": "../../@packaged/[libName]"
  }
}
```
3. Implement a script in the roots `package.json` file. 
```json
{
[...],
scripts: {
[...],
"build:lib": "ng-packagr -p libs/[libName]/package.json"
}
[...]
}
```
4. Run the build script in the console `npm run build:lib`
   You should see a new folder on your root folder called `@packaged`. If you import the lib from there it should also work.

**Setting up typescript configuration files for serving the packaged lib**
1. Create a new file called `tsconfig.packaged.json` in the root folder and insert following content.
```json
// tsconfig.packaged.json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "paths": {
      "@[workspaceName]/*": [
        "@packaged/*"
      ]
    }
  }
}
```
This overrides the path mapping to use the folder `@packaged/*` instead of `libs/*`
2. Create a new file called `tsconfig.packaged.json` in your app folder and insert following content.
```json
// apps/[appName]/src/tsconfig.packaged.json
{
  "$schema": "../../node_modules/ng-packagr/package.schema.json",
  "name": "[libNameForNPM]",
  "version": "1.0.0",
  "ngPackage": {
    "lib": {
      "entryFile": "index.ts"
    },
    "dest": "../../@packaged/[libName]"
  }
}
```
This configures the entry file of your lib as well as the output folder
3. Create a new entry under `apps` in the `.angular-cli.json` to have a separate configuration for serving the packaged libs.
```json
// .angular-cli.json
{
[...]
"apps": [
  [...],
    {
      "name": "angular5-example-packaged",
      "root": "apps/angular5-example/src",
      "outDir": "dist/apps/angular5-example-packaged",
      "assets": [
        "assets",
        "favicon.ico"
      ],
      "index": "index.html",
      "main": "main.ts",
      "polyfills": "polyfills.ts",
      "test": "../../../test.js",
      "tsconfig": "tsconfig.packaged.json",
      "testTsconfig": "../../../tsconfig.spec.json",
      "prefix": "app",
      "styles": [
        "styles.css"
      ],
      "scripts": [],
      "environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      },
      "tags": []
    }
  ],
[...]
}
```
Notice the changes in the key "name", "outDir" and "tsconfig".                           
The important change is under the "tsconfig" key. We now use the `tsconfig.packaged.json` file instead of `tsconfig.app.json`
4. Add another script in you root `package.json`
```json
{
  [...]
  "scripts": [
    [...]
    "start:packaged":"ng serve --app=angular5-exmple-packaged",
    [...]
  ]
}
```
This script will use the newly created settings in `.angular-cli.json` to serve the app with the packaged libs.
5. Test it by running `npm run start:packaged`
