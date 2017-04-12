# Angular Star Rating ⭐⭐⭐⭐⭐
#### ⭐ Angular Star Rating is a >2 Angular made with ❤, based on css only techniques. ⭐

![License](https://img.shields.io/npm/l/angular-star-rating.svg)
[![NPM Version](https://img.shields.io/npm/v/angular-star-rating.svg)](https://www.npmjs.com/package/angular-star-rating)    

[![NPM](https://img.shields.io/npm/dt/angular-star-rating.svg)](https://www.npmjs.com/package/angular-star-rating)  

Angular Star Rating is a >2 Angular made with ❤.  

It is based on best practice UX/UI methods, accessibility in mind and an eye for details. 
In love with reactive forms the easy to control over the keybord it is a perfect fit for all angular projects with ⭐'s.  
   
To keep it as flexible as possible a major part of the logic is based on [css only techniques](https://github.com/BioPhoton/css-star-rating). The component simple applies the state depending css modifiers.

![Angular-Star-Rating](https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/examples/example-usage.gif)


## Features
Fully featured this component is provided with:
- [x] easy **configurable** and reasonable defaults
- [x] all **12 css modifiers** of the awesome [css only star rating](https://github.com/BioPhoton/css-star-rating) library
- [x] it integrates well with **reactive forms** and all it's states
- [x] focus and blur events are handled for a **smooth keyboard navigation**
- [x] it'a **keyboard control** is even better than with native input elements :-)
- [x] importable as a **angular ngModule** it is a plug and play to use


## DEMO
- [x] [Example-App](https://github.com/BioPhoton/angular-star-rating/tree/master/examples/angular2)  

## Related Projects
| Css | Angular 1 |  Angular | Ionic 1 |
|---  |---	    |--- 	  |---      |
| <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/family/css3.png" width="100"> | <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/family/angular1.png" width="100"> | <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/family/angular.png" width="80"> | <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/family/ionic1.png" width="80"> |
| [Css Star Rating](https://github.com/BioPhoton/css-star-rating) | [Angular1 Star Rating](https://github.com/BioPhoton/angular1-star-rating) | [Angular Star Rating](https://github.com/BioPhoton/angular-star-rating) |[Ionic1 Star Rating](https://github.com/BioPhoton/ionic1-star-rating) |

## Installation

**Get Angular Star Rating:**
 - clone & build this repository
 - [download as .zip](https://github.com/BioPhoton/angular-star-rating/releases)
 - via **[npm](https://www.npmjs.org/)**: by running `$ npm install angular-star-rating --save` from your console
 
## Consuming the library

As a precondition we consider you have your ```.angular-cli.json``` setup with an assets folder so that the ```./src/assets``` folder is included in the bundled version. 
But this is given by default if you use the angular-cli to setup your project.

Now you can import your library in your angular application by running:

```bash
$ npm install angular-star-rating --save
```

or 

```bash
$ npm install angular-star-rating@2.0.0-rc.5 --save
```

for a specific version.

Create an ```assets``` folder under your ```./src``` folder and copy the images from your ```./node_modules/assets/images``` folder into ```./src/assets/images```.

In your ```app.module.ts``` import the ```StarRatingModule``` to your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';  
  

// IMPORT YOUR LIBRARY
import { StarRatingModule } from 'angular-star-rating';
  
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  
    // SPECIFY YOUR LIBRARY AS AN  IMPORT
    StarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use the components in your Angular application:

```html
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
  
<!-- USE COMPONENT HERE-->
<star-rating-comp [startype]="'svg'" [rating]="2.63"></star-rating-comp>
```

If something is not working check if 
- the component renders the expected html
- if you use the svg version check if the ```star-rating.icons.svg``` is present in your ```./src/assets/images``` and loaded 

### Implement the output handlers

## Use it with reactive forms
As easy as it could be just apply the ```formControlName``` attribute.
```html
<form formGroup="form">

<star-rating-comp  [startype]="'svg'" [rating]="2.63" formControlName="myControlName"></star-rating-comp>

</form>
```

## Browser support


| IE | Firefox | Chrome | Safari | Opera |
|--- |---	   |--- 	|---	 |---|
| >11  	|  >50 	|   >55	|  >10 	|   >41	|
| <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/browser/ie.png" width="100">	| <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/browser/firefox.png" width="100"> | <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/browser/chrome.png" width="100">  | <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/browser/safari.png" width="100">  | <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/browser/opera.png" width="100"> |


## License

MIT © [Michael Hladky](mailto:michael@hladky.at)
