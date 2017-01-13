# Angular Star Rating ⭐⭐⭐⭐⭐
#### ⭐ Angular 1.5 Component written in typescript, based on css only techniques. ⭐

![License](https://img.shields.io/npm/l/angular-star-rating.svg)
![Bower Version](https://img.shields.io/bower/v/angular1-star-rating.svg)
[![NPM Version](https://img.shields.io/npm/v/angular-star-rating.svg)](https://www.npmjs.com/package/angular-star-rating)  
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/BioPhoton/angular1-star-rating)  
[![Build Status](https://travis-ci.org/BioPhoton/angular1-star-rating.svg?branch=master)](https://travis-ci.org/BioPhoton/angular1-star-rating)
[![NPM](https://img.shields.io/npm/dt/angular-star-rating.svg)](https://www.npmjs.com/package/angular-star-rating)  

[![NPM](https://nodei.co/npm/angular-star-rating.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/angular-star-rating)
[![NPM](https://nodei.co/npm-dl/angular-star-rating.png?height=3&months=3)](https://npmjs.org/angular-star-rating)

[![Package Quality](http://npm.packagequality.com/badge/angular-star-rating.png)](http://packagequality.com/#?package=angular-star-rating)  

Angular Star Rating is a >1.5 Angular component written in typescript.   
It is based on [css-star-rating](https://github.com/BioPhoton/css-star-rating), a fully featured and customizable css only star rating component written in scss.  

![Angular1-Star-Rating](https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/example-usage.gif)

## DEMO
- [x] [Example-App](https://github.com/BioPhoton/angular1-star-rating/tree/master/examples/angular1)  
- [x] [Example-App-Plnkr](https://run.plnkr.co/mEEIdRWQX1fqeOIq/)  

## Features
This module implements all Features from [CSS-STAR-RATING](https://github.com/BioPhoton/css-star-rating).
It also provides callbacks for all calculation functions used in the component as well as all possible event emitters.

- [x] **id** - The html id attribute of the star rating
- [x] **rating** -  The actual Star rating
- [x] **showHalfStars** - To display half stars or not
- [x] **numOfStars** - The max number of stars you can rate
- [x] **size** - The different sizes of the component
- [x] **space** - The space between stars
- [x] **staticColor** - A static color for the stars
- [x] **disabled** - Component is in disabled mode
- [x] **starType** - Stars can be displayed as svg, character or icon-font like fontawesome, glyphicons or ionicons
- [x] **labelText** - The value of the label text
- [x] **labelVisible** - If the label is visible or not
- [x] **labelPosition** - The position of the label
- [x] **speed** - The duration of the animation
- [x] **direction** - The direction of the component i.e. right to left
- [x] **readOnly** - Click event is disabled
- [x] **getColor** - Custom function to calculate the color for a rating
- [x] **getHalfStarVisible** - Custom function to calculate value for displaying half stars or not
- [x] **onClick** - Event emitter for onClick action
- [x] **onUpdate** - Event emitter for onUpdate event

## Browser support


| IE | Firefox | Chrome | Safari | Opera |
|--- |---	   |--- 	|---	 |---|
| > 11  	|  > 50 	|   > 55	|  > 10 	|   > 41	|
| <img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/browser/ie.png" width="100">	| <img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/browser/firefox.png" width="100"> | <img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/browser/chrome.png" width="100">  | <img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/browser/safari.png" width="100">  | <img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/browser/opera.png" width="100"> |


## Install

**Get Angular Star Rating:**
 - clone & build this repository
 - [download as .zip](https://github.com/BioPhoton/angular1-star-rating/releases)
 - via **[npm](https://www.npmjs.org/)**: by running `$ npm install angular-star-rating` from your console
 - via **[bower](https://bower.io/)**: by running `$ bower install angular1-star-rating` from your console
 - via **[cdn](https://cdn.rawgit.com/BioPhoton/angular1-star-rating/2062d6bf/dist/index.js)**: by adding the git-cdn reference in your index.html  
   ```html
      <script src="https://cdn.rawgit.com/BioPhoton/angular1-star-rating/2062d6bf/dist/index.js"></script>
   ```
**Load library**
```html
<script src="[bower or npm folder or git-cdn path]/angular-star-rating/dist/index.js"></script>
```

**Inject it into angular**
```javascript
angular.module('myApp', ['star-rating'])
```

**Use it**
```html
<star-rating-comp
         size="'large'"
         rating="3"
         label-text="'Rating: '"
         on-update="crtl.onUpdate($event)">
 </star-rating-comp>
```

## Component Properties

### Input (< bindings)

**id**: string (Optional)  
The html id attribute of the star rating   
Default: undefined

```html
<star-rating-comp id="'my-id'"></star-rating-comp>
```

**rating**: number (Optional)  
The actual star rating value  
Default: 0  

```html
<star-rating-comp rating="3"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-value.PNG" width="290">

**showHalfStars**: boolean (Optional)
To show half stars or not  
Options: true, false  
Default: false

```html
<star-rating-comp show-half-stars="true"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-show_half_stars-false.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-show_half_stars-true.PNG" width="290">  

**numOfStars**: number (Optional)  
The possible number of stars to choose from  
Default: 5

```html
<star-rating-comp num-of-stars="6"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-num_of_stars.PNG" width="290">

**label-text**: string (Optional)  
The label text next to the stars.  
Default: undefined  

```html
<star-rating-comp label-text="'My text!'"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-label_text.PNG" width="290">

**labelPosition**: starRatingPosition (Optional)  
The position of the label  
Options: top, right, bottom, left  
Default: left  

```html
<star-rating-comp label-position="'top'"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-label-top.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-label-bottom.PNG" width="290">  
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-label-right.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-label-left.PNG" width="290">

**space**: starRatingStarSpace (Optional)  
If the start use the whole space or not. 
Options: no, between, around
Default: no  

```html
<star-rating-comp space="around"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-space-default.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-space-around.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-space-between.PNG" width="290">

**size**: starRatingSizes (Optional)  
The height and width of the stars.    
Options: small, medium, large  
Default: ok  

```html
<star-rating-comp size="'small'"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-size-small.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-size-medium.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-size-large.PNG" width="290">

**color**: starRatingColors (Optional)  
Possible color names for the stars.  
Options: default, negative, ok, positive  
Default: undefined  

```html
<star-rating-comp color="'positive'"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-color-default.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-color-positive.PNG" width="290">  
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-color-ok.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-color-negative.PNG" width="290">

**disabled**: boolean (Optional)  
The click callback is disabled, colors are transparent   
Default: false  

```html
<star-rating-comp disabled="true"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-disabled-false.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-disabled-true.PNG" width="290">
  
**direction**: string (Optional)  
The direction of the stars and label.   
Options: rtl, ltr  
Default: rtl  

```html
<star-rating-comp direction="'ltr'"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-direction-rtl.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-direction-ltr.PNG" width="290">
  
**readOnly**: boolean (Optional)  
The click callback is disabled  
Default: false  

```html
<star-rating-comp read-only="true"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-disabled-false.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-disabled-false.PNG" width="290">

**speed**: starRatingSpeed (Optional)  
The duration of the animation in ms.   
Options: immediately, noticeable, slow  
Default: noticeable  

```html
<star-rating-comp speed="'slow'"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-animation_speed-immediately.gif" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-animation_speed-noticeable.gif" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-animation_speed-slow.gif" width="290">

**starType**: starRatingStarTypes (Optional)  
The type of start resource to use.     
Options: svg, icon, custom-icon
Default: svg  

```html
<star-rating-comp star-type="'icon'"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-type-svg.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-type-icon.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-type-custom_icon.PNG" width="290">

**getColor**: Function (Optional)  
Calculation of the color by rating.  
Params: rating, numOfStars, staticColor  
Return: colorName as string  

```html
<star-rating-comp get-color="parentCtrl.getColor(rating, numOfStars, staticColor)"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-get_color-function.PNG" width="290">

**getHalfStarVisible**: Function (Optional)  
Calculation for adding the "half" class or not, depending on the rating value.  
Params: rating  
Return: boolean 

```html
<star-rating-comp get-half-star-visible="parentCtrl.getHalfStarVisible(rating)" rating="3.1"></star-rating-comp>
```
```javascript
function getHalfStarVisible(rating) {
    var absDiff = Math.abs(rating % 1);
    
    if(absDiff == 0.1) {
        return false;
    }
    
    return absDiff > 0;
}
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-get_half_star_visible-default.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-get_half_star_visible-custom.PNG" width="290">

### Output (& bindings)

**onClick**: Function (Optional)  
Callback function for star click event 
Params: $event
```html
<star-rating-comp on-click="parentCtrl.onClick($event)"></star-rating-comp>
```
```javascript
function onClick($event) {
    parent.clickCount = parent.clickCount + 1;
}
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-on_click-counter.PNG" width="290">

**onUpdate**: Function (Optional)  
Callback function for rating update event 
Params: $event
```html
<star-rating-comp on-update="parentCtrl.onUpdate($event)"></star-rating-comp>
```
```javascript
function onUpdate($event) {
    parent.rating = $event.rating;
}
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular1-star-rating/master/resources/prop-on_update-2waybinding.PNG" width="290">
