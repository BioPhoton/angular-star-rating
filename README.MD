# Angular Star Rating ⭐⭐⭐⭐⭐
#### ⭐ Angular Star Rating is a Angular 2+ component made with ❤, based on css only techniques. ⭐

![License](https://img.shields.io/npm/l/angular-star-rating.svg)
[![NPM Version](https://img.shields.io/npm/v/angular-star-rating.svg)](https://www.npmjs.com/package/angular-star-rating)    

[![NPM](https://img.shields.io/npm/dt/angular-star-rating.svg)](https://www.npmjs.com/package/angular-star-rating)  

Angular Star Rating is a Angular 2+ component made with ❤.  

It is based on best practice UX/UI methods, accessibility in mind and an eye for details. 
In love with reactive forms the component is easy to control over the keybord.  
It is a perfect fit for all angular projects with ⭐'s.  
   
To keep it as flexible as possible a major part of the logic is based on [css only techniques](https://github.com/BioPhoton/css-star-rating). The component simple applies the state depending css modifiers.

![Angular-Star-Rating](https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/examples/example-usage.gif)

## Browser support


| IE | Firefox | Chrome | Safari | Opera |
|--- |---	   |--- 	|---	 |---|
| >11  	|  >50 	|   >55	|  >10 	|   >41	|
| <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/browser/ie.png" width="100">	| <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/browser/firefox.png" width="100"> | <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/browser/chrome.png" width="100">  | <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/browser/safari.png" width="100">  | <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/browser/opera.png" width="100"> |


## Features
Fully featured this component is provided with:
- [x] easy **configurable** and reasonable defaults
- [x] all **12 css modifiers** of the awesome [css only star rating](https://github.com/BioPhoton/css-star-rating) library
- [x] it integrates well with **reactive forms** and all it's states
- [x] focus and blur events are handled for a **smooth keyboard navigation**
- [x] it's **keyboard control** is even better than a native input once :-)
- [x] mouse enter and leave events are used to generate a nice **on hover interaction**
- [x] importable as a **angular ngModule** it is a plug and play to use

## Related Projects
| Css | Angular 1 |  Angular | Ionic 1 |
|---  |---	    |--- 	  |---      |
| <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/family/css3.png" width="100"> | <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/family/angular1.png" width="100"> | <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/family/angular.png" width="80"> | <img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/family/ionic1.png" width="80"> |
| [Css Star Rating](https://github.com/BioPhoton/css-star-rating) | [Angular1 Star Rating](https://github.com/BioPhoton/angular1-star-rating) | [Angular Star Rating](https://github.com/BioPhoton/angular-star-rating) |[Ionic1 Star Rating](https://github.com/BioPhoton/ionic1-star-rating) |

## DEMO
- [x] [Example-App](https://github.com/BioPhoton/angular-star-rating/tree/master/examples/angular2)  

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
<star-rating-comp [starType]="'svg'" [rating]="2.63"></star-rating-comp>
```

If something is not working check if 
- the component renders the expected html
- if you use the svg version check if the ```star-rating.icons.svg``` is present in your ```./src/assets/images``` and loaded 

## Implement the output handler

```typescript
import {Component} from "@angular/core";
import {IStarRatingOnClickEvent, IStarRatingOnRatingChangeEven, IStarRatingIOnHoverRatingChangeEvent} from "angular-star-rating/src/star-rating-struct";

@Component({
    selector: 'my-events-component',
    template: `    
        
            <star-rating-comp   [starType]="'svg'" 
                                [hoverEnabled]="true"
                                (onClick)="onClick($event)" 
                                (onRatingChange)="onRatingChange($event)"
                                (onHoverRatingChange)="onHoverRatingChange($event)">                             
            </star-rating-comp>
            <p>onHoverRatingChangeResult: {{onHoverRatingChangeResult | json}}</p>
            <p>onClickResult: {{onClickResult | json}}</p>
            <p>onRatingChangeResult: {{onRatingChangeResult | json}}</p>
    `
})
export class MyEventsComponent {

    onClickResult:IStarRatingOnClickEvent;
    onHoverRatingChangeResult:IStarRatingIOnHoverRatingChangeEvent;
    onRatingChangeResult:IStarRatingOnRatingChangeEven;

    onClick = ($event:IStarRatingOnClickEvent) => {
        console.log('onClick $event: ', $event);
        this.onClickResult = $event;
    };

    onRatingChange = ($event:IStarRatingOnRatingChangeEven) => {
        console.log('onRatingUpdated $event: ', $event);
        this.onRatingChangeResult = $event;
    };

    onHoverRatingChange = ($event:IStarRatingIOnHoverRatingChangeEvent) => {
        console.log('onHoverRatingChange $event: ', $event);
        this.onHoverRatingChangeResult = $event;
    };

}
```

```html
<!-- app.component.html-->
<my-event-component></my-event-component>
```

## Use it with reactive forms

As easy as it could be. Just apply the ```formControlName``` attribute to the star rating component.

```typescript
//my.component.ts
import {Component} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
    selector: 'my-form-component',
    template: `    
        <form [formGroup]="form">
            <star-rating-comp [starType]="'svg'" formControlName="myRatingControl" ></star-rating-comp>
            <pre>{{ form.value | json }}</pre>
        </form>
    `
})
export class MyFormComponent {

    form = new FormGroup({
        myRatingControl: new FormControl('')
    });

}
```

```html
<!-- app.component.html-->
<my-form-component></my-form-component>
```

## Component Bindings

### Modifier list
   
- Label modifier
  - Label visible
  - Label text
  - Label position
- Style modifier
  - Star type
  - Color
  - Size
  - Space
  - Speed
  - Direction
  - Disabled
- Control modifier
  - Rating
  - Step
  - Number of stars
  - Show half stars
  - Read only
  - Id
  - getColor
  - getHalfStarVisible
    
#### Label Modifier
**labelVisible**: string (Optional)  
The visibility of the label text.  
Default: true  

```html
<star-rating-comp [labelVisible]="false"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-label-visible_false.PNG" width="290">

**labelText**: string (Optional)  
The text next to the stars.  
Default: undefined  

```html
<star-rating-comp [labelText]="'My text!'"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-label_text.PNG" width="290">

**labelPosition**: starRatingPosition (Optional)  
The position of the label  
Options: top, right, bottom, left  
Default: left  

```html
<star-rating-comp [labelPosition]="'top'"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-label-top.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-label-bottom.PNG" width="290">  
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-label-right.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-label-left.PNG" width="290">

#### Style Modifier


**starType**: starRatingStarTypes (Optional)  
The type of start resource to use.     
Options: svg, icon
Default: svg  

```html
<star-rating-comp [starType]="'icon'"></star-rating-comp>
```

**staticColor**: starRatingColor (Optional)  
Possible color names for the stars.  
Options: default, negative, ok, positive  
Default: undefined  

```html
<star-rating-comp [staticColor]="'positive'"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-color-default.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-color-positive.PNG" width="290">  
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-color-middle.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-color-negative.PNG" width="290">

**size**: starRatingSizes (Optional)  
The height and width of the stars.    
Options: small, medium, large  
Default: medium  

```html
<star-rating-comp [size]="'small'"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-size-small.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-size-medium.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-size-large.PNG" width="290">


**space**: starRatingStarSpace (Optional)  
If the start use the whole space or not. 
Options: no, between, around
Default: no  

```html
<star-rating-comp [space]="'around'"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-spread-false.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-spread-true.PNG" width="290">


**speed**: starRatingSpeed (Optional)  
The duration of the animation in ms.   
Options: immediately, noticeable, slow  
Default: noticeable  

```html
<star-rating-comp [speed]="'slow'"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-animation_speed-immediately.gif" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-animation_speed-noticeable.gif" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-animation_speed-slow.gif" width="290">


**direction**: string (Optional)  
The direction of the stars and label.   
Options: rtl, ltr  
Default: rtl  

```html
<star-rating-comp [direction]="'ltr'"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-direction-rtl.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-direction-ltr.PNG" width="290">
  
  
**disabled**: boolean (Optional)  
The click callback is disabled, colors are transparent   
Default: false  

```html
<star-rating-comp [disabled]="true"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-disabled-false.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-disabled-true.PNG" width="290">


#### Control modifier

**rating**: number (Optional)  
The actual star rating value  
Default: no  

```html
<star-rating-comp [rating]="3"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-value.PNG" width="290">

**step**: number (Optional)  
The step interval of the control  
Default: 1  

```html
<star-rating-comp [step]="0.5"></star-rating-comp>
```

**numOfStars**: number (Optional)  
The possible number of stars to choose from  
Default: 5

```html
<star-rating-comp [numOfStars]="6"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-num_of_stars.PNG" width="290">

**showHalfStars**: boolean (Optional)
To show half stars or not  
Options: true, false  
Default: false

```html
<star-rating-comp [showHalfStars]="true"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-show_half_stars-false.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-show_half_stars-true.PNG" width="290">  

**readOnly**: boolean (Optional)  
The click callback is disabled  
Default: false  

```html
<star-rating-comp [readOnly]="true"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-disabled-false.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-disabled-false.PNG" width="290">

**id**: string (Optional)  
The html id attribute of the star rating   
Default: undefined

```html
<star-rating-comp [id]="'my-id'"></star-rating-comp>
```

**getColor**: Function (Optional)  
Calculation of the color by rating.  
Params: rating, number,numOfStars and staticColor  
Return: color name  

```html
<star-rating-comp [getColor]="ctrl.getColor(rating, numOfStars, staticColor)"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-get_color-function.PNG" width="290">

**getHalfStarVisible**: Function (Optional)  
Calculation for adding the "half" class or not, depending on the rating value.  
Params: rating  
Return: boolean 

```html
<star-rating-comp [getHalfStarClass]="ctrl.getHalfStarClass(rating)" [rating]="3.2"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-get_half_star_visible-default.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-get_half_star_visible-custom.PNG" width="290">


### Outputs

**onClick**: Function (Optional)  
Callback function for star click event 
Params: $event
```html
<star-rating-comp (onClick)="ctrl.onClick($event)"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-on_click-counter.PNG" width="290">

**onRatingChange**: Function (Optional)  
Callback function for rating change event 
Params: $event
```html
<star-rating-comp (onRatingChange)="ctrl.onRatingChange($event)"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-on_update-2waybinding.PNG" width="290">

**hoverEnabled**: boolean (Optional)  
An or disable hover interaction. 
Default: false
Potions: true, false
```html
<star-rating-comp [hoverEnabled]="true"></star-rating-comp>
```

**onHoverRatingChange**: Function (Optional)  
Callback function for hoverRating change event 
Params: $event
```html
<star-rating-comp [hoverEnabled]="true" (onHoverRatingChange)="ctrl.onHoverRatingChange($event)"></star-rating-comp>
```

## Shields and other draft
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/BioPhoton/angular-star-rating)   
[![NPM](https://img.shields.io/npm/dt/angular-star-rating.svg)](https://www.npmjs.com/package/angular-star-rating)  
[![NPM](https://nodei.co/npm/angular-star-rating.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/angular-star-rating)  
[![NPM](https://nodei.co/npm-dl/angular-star-rating.png?height=3&months=9)](https://npmjs.org/angular-star-rating)  
[![Package Quality](http://npm.packagequality.com/badge/angular-star-rating.png)](http://packagequality.com/#?package=angular-star-rating)    


## License

MIT © [Michael Hladky](mailto:michael@hladky.at)
