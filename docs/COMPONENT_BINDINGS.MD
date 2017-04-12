# Component Bindings

## Modifier list
   
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
    
### Label Modifier
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

### Style Modifier


**starType**: starRatingStarTypes (Optional)  
The type of start resource to use.     
Options: svg, icon
Default: svg  

```html
<star-rating-comp [starType]="'icon'"></star-rating-comp>
```

**staticColor**: starRatingColor (Optional)  
Possible color names for the stars.  
Options: default, negative, middle, positive  
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
Default: middle  

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


### Cotrol modifier

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
<star-rating-comp [getHalfStarClass]="ctrl.getHalfStarClass(rating)" rating="3.2"></star-rating-comp>
```
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-get_half_star_visible-default.PNG" width="290">
<img src="https://raw.githubusercontent.com/BioPhoton/angular-star-rating/master/resources/properties/prop-get_half_star_visible-custom.PNG" width="290">


## Outputs

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
