/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//import * as angular from 'angular';
	"use strict";
	var star_rating_component_1 = __webpack_require__(1);
	var styles = __webpack_require__(4);
	var icons = __webpack_require__(8);
	var styles = styles;
	var icons = icons;
	exports.angularStars = angular
	    .module('star-rating', [])
	    .component('starRating', new star_rating_component_1.StarRatingComponent())
	    .name;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var star_rating_controller_1 = __webpack_require__(2);
	var templateUrl = __webpack_require__(3);
	var StarRatingComponent = (function () {
	    function StarRatingComponent() {
	        this.bindings = {
	            id: '@',
	            text: '<',
	            color: '<',
	            starType: '<',
	            numOfStars: '<',
	            speed: '<',
	            size: '<',
	            spread: '<',
	            readOnly: '<',
	            disabled: '<',
	            rating: '<',
	            labelPosition: '<',
	            getColor: '&?',
	            onClick: '&?',
	            onUpdate: '&?'
	        };
	        this.replace = true;
	        this.controller = star_rating_controller_1.StarRatingController;
	        this.templateUrl = templateUrl;
	    }
	    return StarRatingComponent;
	}());
	exports.StarRatingComponent = StarRatingComponent;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var StarRatingController = (function () {
	    //
	    function StarRatingController() {
	        /**
	         * calculateColor
	         *
	         * The default function for color calculation
	         * basted on the current rating and the scale
	         *
	         *
	         * @param rating
	         * @param numOfStars
	         * @param fixColor
	         * @returns {starRatingColors}
	         */
	        this.calculateColor = function (rating, numOfStars, fixColor) {
	            if (fixColor) {
	                return fixColor;
	            }
	            var oneThird = numOfStars / 3;
	            var color = 'negative';
	            if (rating > oneThird) {
	                color = 'middle';
	            }
	            if (rating > oneThird * 2) {
	                color = 'positive';
	            }
	            return color;
	        };
	        this.classEmpty = this.classEmpty || "star-empty-icon";
	        this.classFilled = this.classFilled || "star-filled-icon";
	        this.pathEmpty = this.pathEmpty || StarRatingController.DefaultSvgPath + "#" + StarRatingController.DefaultSvgEmptySymbolId;
	        this.pathFilled = this.pathFilled || StarRatingController.DefaultSvgPath + "#" + StarRatingController.DefaultSvgFilledSymbolId;
	        this.getColor = this.getColor || this.calculateColor;
	        this.onUpdate = this.onUpdate || function () { };
	        this.onClick = this.onClick || function () { };
	        this.updateNumOfStars(this.numOfStars);
	    }
	    /**
	     * getStarsArray
	     *
	     * returns an array of increasing numbers starting at 1
	     *
	     * @param numOfStars
	     * @returns {Array}
	     */
	    StarRatingController.getStarsArray = function (numOfStars) {
	        var stars = [];
	        for (var i = 0; i < numOfStars; i++) {
	            stars.push(i + 1);
	        }
	        return stars;
	    };
	    /**
	     * $onChanges
	     *
	     * angulars $onChange hook
	     *
	     * @param changes
	     */
	    StarRatingController.prototype.$onChanges = function (changes) {
	        var valueChanged = function (key, changes) {
	            if (key in changes)
	                if (changes[key].currentValue != changes[key].previousValue) {
	                    return true;
	                }
	            return false;
	        };
	        //number
	        if (valueChanged('rating', changes)) {
	            this.updateRating(changes.rating.currentValue);
	        }
	        if (valueChanged('numOfStars', changes)) {
	            this.updateNumOfStars(changes.numOfStars.currentValue);
	        }
	        //string
	        if (valueChanged('text', changes)) {
	            this.text = changes.text.currentValue;
	        }
	        if (valueChanged('color', changes)) {
	            this.fixedColor = (changes.color.currentValue) ? changes.color.currentValue : undefined;
	            this.color = this.getColor(this.rating, this.numOfStars, this.fixedColor);
	        }
	        if (valueChanged('size', changes)) {
	            this.size = changes.size.currentValue || StarRatingController.DefaultSize;
	        }
	        if (valueChanged('speed', changes)) {
	            this.speed = changes.speed.currentValue || StarRatingController.DefaultSpeed;
	        }
	        if (valueChanged('labelPosition', changes)) {
	            this.labelPosition = changes.labelPosition.currentValue || StarRatingController.DefaultLabelPosition;
	        }
	        if (valueChanged('starType', changes)) {
	            this.starType = changes.starType.currentValue || StarRatingController.DefaultStarType;
	        }
	        //boolean
	        if (valueChanged('spread', changes)) {
	            this.spread = !!changes.spread.currentValue;
	        }
	        if (valueChanged('readOnly', changes)) {
	            this.readOnly = !!changes.readOnly.currentValue;
	        }
	        if (valueChanged('disabled', changes)) {
	            this.disabled = !!changes.disabled.currentValue;
	        }
	    };
	    /**
	     * onStarClicked
	     *
	     * Is fired when a star is clicked. And updated the rating value.
	     * This function returns if the disabled or readOnly
	     * property is set. If provided it calls the custom onClick
	     * handler with the actual rating value.
	     *
	     * @param rating
	     */
	    StarRatingController.prototype.onStarClicked = function (rating) {
	        if (this.readOnly || this.disabled) {
	            return;
	        }
	        this.updateRating(rating);
	        this.onClick({ rating: this.rating });
	    };
	    /**
	     * updateRating
	     *
	     * Used to set the rating value and update other variables
	     * based on rating. This function also
	     * triggers the onUpdate emitter.
	     *
	     * @param value
	     */
	    StarRatingController.prototype.updateRating = function (value) {
	        this.rating = value;
	        this.onUpdate({ rating: this.rating });
	        this.color = this.getColor(this.rating, this.numOfStars, this.fixedColor);
	    };
	    /**
	     * updateNumOfStars
	     *
	     * Used to set the numOfStars value and update other variables
	     * based on numOfStars.
	     *
	     * @param {number} nomOfStars the number of stars
	     */
	    StarRatingController.prototype.updateNumOfStars = function (nomOfStars) {
	        this.numOfStars = nomOfStars || StarRatingController.DefaultNumOfStars;
	        this.stars = StarRatingController.getStarsArray(this.numOfStars);
	        this.color = this.getColor(this.rating, this.numOfStars, this.fixedColor);
	    };
	    return StarRatingController;
	}());
	exports.StarRatingController = StarRatingController;
	StarRatingController.DefaultNumOfStars = 5;
	StarRatingController.DefaultSize = "medium";
	StarRatingController.DefaultSpeed = "noticeable";
	StarRatingController.DefaultLabelPosition = "left";
	StarRatingController.DefaultStarType = "svg";
	StarRatingController.DefaultAssetsPath = "assets/images/";
	StarRatingController.DefaultSvgPath = StarRatingController.DefaultAssetsPath + "star-rating.icons.svg";
	StarRatingController.DefaultSvgEmptySymbolId = "star";
	StarRatingController.DefaultSvgFilledSymbolId = "star-filled";


/***/ },
/* 3 */
/***/ function(module, exports) {

	var path = 'src/star-rating.tpl.html';
	var html = "<div id=\"{{$ctrl.id}}\"\r\n     class=\"rating {{$ctrl.rating?'value-'+$ctrl.rating:0}} {{$ctrl.color?'color-'+$ctrl.color:''}} {{$ctrl.starType?'star-'+$ctrl.starType:''}} {{$ctrl.speed}} {{$ctrl.size}} {{$ctrl.labelPosition?'label-'+$ctrl.labelPosition:''}}\"\r\n     ng-class=\"{'read-only':$ctrl.readOnly, 'disabled':$ctrl.disabled, 'spread':$ctrl.spread}\">\r\n\r\n  <div ng-show=\"$ctrl.text\" class=\"label-value\">{{$ctrl.text}}</div>\r\n\r\n  <div class=\"star-container\">\r\n    <div class=\"star\"\r\n        ng-repeat=\"star in $ctrl.stars track by $index\"\r\n        ng-click=\"$ctrl.onStarClicked(star)\">\r\n\r\n        <i class=\"star-empty {{$ctrl.classEmpty}}\"></i>\r\n        <i class=\"star-filled {{$ctrl.classFilled}}\"></i>\r\n\r\n        <svg class=\"star-empty {{$ctrl.classEmpty}}\">\r\n          <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:ng-href=\"{{$ctrl.pathEmpty}}\"></use>\r\n        </svg>\r\n        <svg class=\"star-filled {{$ctrl.classFilled}}\">\r\n            <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"{{$ctrl.pathFilled}}\"></use>\r\n        </svg>\r\n\r\n       </div>\r\n  </div>\r\n\r\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./star-rating.sc5.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./star-rating.sc5.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\r\nStar Rating\r\n\r\nBeautiful ui component for displaying rating values of up to 5 stars with css only.\r\nOptions are:\r\n- Value\r\n- Size\r\n- Spread\r\n- Static Color\r\n- Label Position\r\n- Animation Speed\r\n- Disabled\r\n\r\nStyleguide 1.1\r\n*/\n/*\r\nValue\r\n\r\nDifferent styles for different rating values. \r\nDefault colors are red for values equal to 2 or below, yellow for 3, and green for 4 or above.\r\n\r\ndefault                  - 0 rating\r\n.value-1                - 1 rating\r\n.value-2                - 2 rating\r\n.value-3                - 3 rating\r\n.value-4                - 4 rating\r\n.value-5                - 5 rating\r\n\r\nmarkup:\r\n<div class=\"rating {$modifiers}\">\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5]\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\nsg-wrapper:\r\n<div class=\"phone-simulator padding\">\r\n    <sg-wrapper-content/>\r\n</div>\r\n\r\nStyleguide 1.1.1\r\n*/\n/*\r\nSize\r\n\r\nDifferent sizes of the stars and the label.\r\nAdditional to the default size medium there are more sizes, small and large.\r\n\r\n\r\ndefault                  - Default size\r\n.small                   - Small size\r\n.medium                  - Medium size\r\n.large                   - Large size\r\n\r\nmarkup:\r\n<div class=\"rating value-4 {$modifiers}\">\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5]\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\nsg-wrapper:\r\n<div class=\"phone-simulator padding\">\r\n    <sg-wrapper-content/>\r\n</div>\r\n\r\nStyleguide 1.1.2\r\n*/\n/*\r\nSpread\r\n\r\nDifferent spread options\r\n\r\ndefault                  - No spread\r\n.spread                  - Stars are spread to the entire container width\r\n\r\nmarkup:\r\n<div class=\"rating value-4 {$modifiers}\">\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5]\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\nsg-wrapper:\r\n<div class=\"phone-simulator padding\">\r\n    <sg-wrapper-content/>\r\n</div>\r\n\r\nStyleguide 1.1.3\r\n*/\n/*\r\nStatic Color\r\n\r\nOverriding default colors of ratings to display the color independent of the rating.\r\n\r\ndefault                  - No spread\r\n.color-positive          - Stars are always colored positive\r\n.color-middle          - Stars are always colored middle\r\n.color-negative          - Stars are always colored negative\r\n\r\nmarkup:\r\n<div class=\"rating {$modifiers}\">\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5]\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"rating value-2 {$modifiers}\">\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5]\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"rating value-3 {$modifiers}\">\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5]\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"rating value-4 {$modifiers}\">\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5]\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\nsg-wrapper:\r\n<div class=\"phone-simulator padding\">\r\n    <sg-wrapper-content/>\r\n</div>\r\n\r\nStyleguide 1.1.4\r\n*/\n/*\r\nLabel Position\r\n\r\nDisplays the rating value as text label.\r\n\r\n default                 - Value displayed on the left side\r\n.label-top               - Value displayed on the top\r\n.label-right             - Value displayed on the right side\r\n.label-bottom            - Value displayed on the bottom\r\n.label-left              - Value displayed on the left side\r\n\r\n\r\nmarkup:\r\n<div class=\"rating padding {$modifiers}\">\r\n    <div class=\"label-value\">0</div>\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5]\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"rating value-2 small padding {$modifiers}\">\r\n    <div class=\"label-value\">(bad)</div>\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5]\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"rating value-3 medium padding {$modifiers}\">\r\n    <div class=\"label-value\">3.1</div>\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5]\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"rating value-4 large padding {$modifiers}\">\r\n    <div class=\"label-value\">Good</div>\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5]\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\nsg-wrapper:\r\n<div class=\"phone-simulator padding\">\r\n    <sg-wrapper-content/>\r\n</div>\r\n\r\nStyleguide 1.1.5\r\n*/\n/*\r\n   Disabled\r\n\r\n   Visualizes the disabled state of the rating component. The styles symbolizing that no interaction is possible\r\n\r\n   .disabled                - Stars are grayed out, no interaction is possible\r\n\r\n   markup:\r\n   <div class=\"rating padding {$modifiers}\">\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5]\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"rating value-2 small padding {$modifiers}\">\r\n    <div class=\"label-value\">(bad)</div>\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5]\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"rating value-3 medium padding {$modifiers}\">\r\n    <div class=\"label-value\">3.1</div>\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5]\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"rating value-4 large padding {$modifiers}\">\r\n    <div class=\"label-value\">Good</div>\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5]\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n   sg-wrapper:\r\n   <div class=\"phone-simulator padding\">\r\n       <sg-wrapper-content/>\r\n   </div>\r\n\r\n   Styleguide 1.1.6\r\n   */\n/*\r\n   Animation Speed\r\n\r\n   By default the stars animate (fade) to the new state. These modifiers provide three different durations of the transition.\r\n\r\n   default                   - Transition runs in noticeable speed\r\n   .immediately              - No Transition\r\n   .noticeable               - Transition runs in noticeable speed\r\n   .slow                     - Transition runs very slow\r\n\r\n   markup:\r\n   <div ng-init=\"data.rating = 1\" class=\"rating padding value-{{data.rating}} {$modifiers}\">\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5] track by $index\" ng-click=\"data.rating = (data.rating == 1)?5:1\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n   sg-wrapper:\r\n   <div class=\"phone-simulator padding\">\r\n       <sg-wrapper-content/>\r\n   </div>\r\n\r\n   Styleguide 1.1.7\r\n   */\n/*\r\n   Star Type\r\n\r\n   The stars can be generated oft of three different types. characters, svg's of any icon font\r\n\r\n   default                  - The default star type is svg\r\n   .star-icon               - Star-Characters for default browser font\r\n   .star-svg                - Star-Vectors form the shipped svg images\r\n\r\n   markup:\r\n   <div class=\"rating padding value-3 {$modifiers}\">\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5] track by $index\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n            <i class=\"star-empty\"></i>\r\n            <i class=\"star-filled\"></i>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"rating padding value-3 {$modifiers}\">\r\n    <div class=\"star-container\">\r\n        <div class=\"star\" ng-repeat=\"i in [1,2,3,4,5] track by $index\">\r\n            <svg class=\"star-empty\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star\"></use>\r\n            </svg>\r\n            <svg class=\"star-filled\">\r\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#star-filled\"></use>\r\n            </svg>\r\n            <i class=\"star-empty fa fa-star\"></i>\r\n            <i class=\"star-filled fa fa-star-o\"></i>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n   sg-wrapper:\r\n   <div class=\"phone-simulator padding\">\r\n       <sg-wrapper-content/>\r\n   </div>\r\n\r\n   Styleguide 1.1.8\r\n   */\n/*VARIABLES\r\n====================================================*/\n/*Spacing*/\n/*Colors*/\n/*Sizes*/\n/*small*/\n/*medium*/\n/*large*/\n/*Animation*/\n/*Icons*/\n/*Disabled*/\n/*Default styles and modifier\r\n====================================================*/\n.rating {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 5px;\n  /*Rating Value\r\n  ====================================================*/\n  /*Rating Position\r\n  ====================================================*/\n  /*AnimationSpeed\r\n  ====================================================*/\n  /* Star Type\r\n  ====================================================*/\n  /* Sizes */\n  /* Spread\r\n  ====================================================*/\n  /* Color override */\n  /*Disabled\r\n  ====================================================*/ }\n  .rating .star-container {\n    display: flex;\n    align-items: center;\n    flex: 0 0 auto; }\n    .rating .star-container .star {\n      position: relative; }\n      .rating .star-container .star svg, .rating .star-container .star i {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%; }\n        .rating .star-container .star svg.star-filled, .rating .star-container .star i.star-filled {\n          opacity: 0; }\n      .rating .star-container .star + .star {\n        margin-left: 5px; }\n  .rating.value-1 .star-container .star:nth-child(-n+1) svg.star-filled,\n  .rating.value-1 .star-container .star:nth-child(-n+1) i.star-filled {\n    opacity: 1; }\n  .rating.value-1 .star-container .star svg,\n  .rating.value-1 .star-container .star i {\n    fill: #f03c56;\n    color: #f03c56; }\n  .rating.value-2 .star-container .star:nth-child(-n+2) svg.star-filled,\n  .rating.value-2 .star-container .star:nth-child(-n+2) i.star-filled {\n    opacity: 1; }\n  .rating.value-2 .star-container .star svg,\n  .rating.value-2 .star-container .star i {\n    fill: #f03c56;\n    color: #f03c56; }\n  .rating.value-3 .star-container .star:nth-child(-n+3) svg.star-filled,\n  .rating.value-3 .star-container .star:nth-child(-n+3) i.star-filled {\n    opacity: 1; }\n  .rating.value-3 .star-container .star svg,\n  .rating.value-3 .star-container .star i {\n    fill: #ffc058;\n    color: #ffc058; }\n  .rating.value-4 .star-container .star:nth-child(-n+4) svg.star-filled,\n  .rating.value-4 .star-container .star:nth-child(-n+4) i.star-filled {\n    opacity: 1; }\n  .rating.value-4 .star-container .star svg,\n  .rating.value-4 .star-container .star i {\n    fill: #7ed321;\n    color: #7ed321; }\n  .rating.value-5 .star-container .star:nth-child(-n+5) svg.star-filled,\n  .rating.value-5 .star-container .star:nth-child(-n+5) i.star-filled {\n    opacity: 1; }\n  .rating.value-5 .star-container .star svg,\n  .rating.value-5 .star-container .star i {\n    fill: #7ed321;\n    color: #7ed321; }\n  .rating.value-6 .star-container .star:nth-child(-n+6) svg.star-filled,\n  .rating.value-6 .star-container .star:nth-child(-n+6) i.star-filled {\n    opacity: 1; }\n  .rating.value-6 .star-container .star svg,\n  .rating.value-6 .star-container .star i {\n    fill: #7ed321;\n    color: #7ed321; }\n  .rating.value-7 .star-container .star:nth-child(-n+7) svg.star-filled,\n  .rating.value-7 .star-container .star:nth-child(-n+7) i.star-filled {\n    opacity: 1; }\n  .rating.value-7 .star-container .star svg,\n  .rating.value-7 .star-container .star i {\n    fill: #7ed321;\n    color: #7ed321; }\n  .rating.value-8 .star-container .star:nth-child(-n+8) svg.star-filled,\n  .rating.value-8 .star-container .star:nth-child(-n+8) i.star-filled {\n    opacity: 1; }\n  .rating.value-8 .star-container .star svg,\n  .rating.value-8 .star-container .star i {\n    fill: #7ed321;\n    color: #7ed321; }\n  .rating.value-9 .star-container .star:nth-child(-n+9) svg.star-filled,\n  .rating.value-9 .star-container .star:nth-child(-n+9) i.star-filled {\n    opacity: 1; }\n  .rating.value-9 .star-container .star svg,\n  .rating.value-9 .star-container .star i {\n    fill: #7ed321;\n    color: #7ed321; }\n  .rating.value-10 .star-container .star:nth-child(-n+10) svg.star-filled,\n  .rating.value-10 .star-container .star:nth-child(-n+10) i.star-filled {\n    opacity: 1; }\n  .rating.value-10 .star-container .star svg,\n  .rating.value-10 .star-container .star i {\n    fill: #7ed321;\n    color: #7ed321; }\n  .rating.label-top {\n    flex-direction: column; }\n    .rating.label-top .label-value + .star-container {\n      margin-left: 0;\n      margin-right: 0;\n      margin-top: 5px; }\n  .rating .star-container {\n    margin-left: 5px;\n    margin-right: 5px; }\n  .rating.label-left .label-value {\n    flex: 0 0 auto; }\n    .rating.label-left .label-value + .star-container {\n      margin-left: 5px;\n      margin-right: 0; }\n  .rating.label-right {\n    flex-direction: row-reverse; }\n    .rating.label-right .label-value + .star-container {\n      margin-left: 0;\n      margin-right: 5px; }\n  .rating.label-bottom {\n    flex-direction: column-reverse; }\n    .rating.label-bottom .label-value + .star-container {\n      margin-left: 0;\n      margin-right: 0;\n      margin-bottom: 5px; }\n  .rating .star {\n    transition: all 0.3s ease; }\n    .rating .star svg, .rating .star i {\n      transition: all 0.3s ease; }\n  .rating.immediately .star {\n    transition: none; }\n    .rating.immediately .star svg, .rating.immediately .star i {\n      transition: none; }\n  .rating.noticeable .star {\n    transition: all 0.3s ease; }\n    .rating.noticeable .star svg, .rating.noticeable .star i {\n      transition: all 0.3s ease; }\n  .rating.slow .star {\n    transition: all 0.8s ease; }\n    .rating.slow .star svg, .rating.slow .star i {\n      transition: all 0.8s ease; }\n  .rating .star svg {\n    display: block; }\n  .rating .star i {\n    display: none;\n    font-style: normal; }\n    .rating .star i.star-empty:before {\n      content: \"\\2606\"; }\n    .rating .star i.star-filled:before {\n      content: \"\\2605\"; }\n  .rating.star-icon .star svg {\n    display: none; }\n  .rating.star-icon .star i {\n    display: block; }\n  .rating.star-svg .star svg {\n    display: block; }\n  .rating.star-svg .star i {\n    display: none; }\n  .rating.small .star {\n    width: 10px;\n    height: 9, 5px; }\n    .rating.small .star i {\n      font-size: 11px;\n      line-height: 10px; }\n  .rating.small .label-value {\n    font-size: 9.5px;\n    line-height: 9.5px; }\n  .rating .star {\n    width: 20px;\n    height: 20px; }\n    .rating .star i {\n      font-size: 26px;\n      line-height: 21px;\n      margin-left: -1px; }\n  .rating .label-value {\n    font-size: 18px;\n    line-height: 18px; }\n  .rating.medium .star {\n    width: 20px;\n    height: 20px; }\n    .rating.medium .star i {\n      font-size: 26px;\n      line-height: 21px; }\n  .rating.medium .label-value {\n    font-size: 18px;\n    line-height: 21px; }\n  .rating.large .star {\n    width: 35px;\n    height: 33.3px; }\n    .rating.large .star i {\n      font-size: 36px;\n      line-height: 35px; }\n  .rating.large .label-value {\n    font-size: 28px;\n    line-height: 35px; }\n  .rating .star-container {\n    justify-content: center; }\n  .rating.spread .star-container {\n    flex: 1 1 auto;\n    justify-content: space-between; }\n  .rating.color-default .star-container .star svg {\n    fill: #999; }\n  .rating.color-default .star-container .star i {\n    color: #999; }\n  .rating .star-container .star svg {\n    fill: #999; }\n  .rating .star-container .star i {\n    color: #999; }\n  .rating.color-negative .star-container .star svg {\n    fill: #f03c56; }\n  .rating.color-negative .star-container .star i {\n    color: #f03c56; }\n  .rating.color-middle .star-container .star svg {\n    fill: #ffc058; }\n  .rating.color-middle .star-container .star i {\n    color: #ffc058; }\n  .rating.color-positive .star-container .star svg {\n    fill: #7ed321; }\n  .rating.color-positive .star-container .star i {\n    color: #7ed321; }\n  .rating.disabled .label-value {\n    opacity: 0.5; }\n  .rating.disabled .star-container .star {\n    opacity: 0.5; }\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/images/star-rating.icons.svg";

/***/ }
/******/ ]);