# Angular Star Rating
#### Angular 1.5 Component written in typescript, based on css only techniques.

[![Bower version](https://badge.fury.io/bo/angular-star-rating.svg)](https://badge.fury.io/bo/angular-star-rating)
[![npm version](https://badge.fury.io/js/angular-star-rating.svg)](https://badge.fury.io/js/angular-star-rating)  
[![Package Quality](http://npm.packagequality.com/badge/angular-star-rating.png)](http://packagequality.com/#?package=angular-star-rating)
Angular Star Rating is a >1.5 Angular component written in typescript.   
It is based on a fully customizable css only star rating component written in scss. 

## DEMOS
![alt tag](https://github.com/BioPhoton/angular-star-rating/blob/master/resources/star-rating-options.PNG)

## Install

**Get Angular Sar Rating:**
 - clone & build this repository
 - [download as .zip](https://github.com/BioPhoton/angular-star-rating/releases)
 - or via **[npm](https://www.npmjs.org/)**: by running `$ npm install angular-star-rating` from your console
 
## Component Properties

### @ bindings

**id**: string (Optional)  
The html id attribute of the star rating   
Default: undefined

### < bindings

**text**: string (Optional)  
The text next to the stars.  
Default: undefined  

**labelPosition**: starRatingPosition (Optional)  
The position of the label  
Options: top, right, bottom, left  
Default: left  

**spread**: boolean (Optional)  
If the start use the whole space or not.  
Default: false  

**numOfStars**: number (Optional)  
The possible number of stars to choose from  
Default: 5

**rating**: number (Optional)  
The actual star rating value  
Default: undefined  

**color**: starRatingColors (Optional)  
Possible color names for the stars.  
Options: default, negative, middle, positive  
Default: undefined

**disabled**: boolean (Optional)  
The click callback is disabled, colors are transparent   
Default: false  
  
**readOnly**: boolean (Optional)  
The click callback is disabled  
Default: false  

**size**: starRatingSizes (Optional)  
The height and width of the stars.    
Options: small, medium, large  
Default: middle  

**speed**: starRatingSpeed (Optional)  
The duration of the animation in ms.   
Options: immediately, noticeable, slow  
Default: noticeable  

**starType**: starRatingStarTypes (Optional)  
The type of start resource to use.     
Options: svg, icon, image  
Default: svg  

### & bindings

**getColor**: Function (Optional)  
Calculation of the color by rating.  
Params: rating, number,numOfStars and staticColor  
Return: color name  

**onClick**: Function (Optional)  
Callback function for star click event 
Params: rating

**onUpdate**: Function (Optional)  
Callback function for rating update event 
Params: rating

## Usage 
### ES5
### ES6 
### TS 