import { Component, EventEmitter, forwardRef, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StarRatingConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StarRatingUtils {
    /**
     * @param {?} numOfStars
     * @return {?}
     */
    static getStarsArray(numOfStars) {
        let /** @type {?} */ stars = [];
        for (let /** @type {?} */ i = 0; i < numOfStars; i++) {
            stars.push(i + 1);
        }
        return stars;
    }
    /**
     * @param {?} rating
     * @return {?}
     */
    static getHalfStarVisible(rating) {
        return Math.abs(rating % 1) > 0;
    }
    /**
     * @param {?} rating
     * @param {?} numOfStars
     * @param {?=} staticColor
     * @return {?}
     */
    static getColor(rating, numOfStars, staticColor) {
        rating = rating || 0;
        //if a fix color is set use this one
        if (staticColor) {
            return staticColor;
        }
        //calculate size of smallest fraction
        let /** @type {?} */ fractionSize = numOfStars / 3;
        //apply color by fraction
        let /** @type {?} */ color = 'default';
        if (rating > 0) {
            color = 'negative';
        }
        if (rating > fractionSize) {
            color = 'ok';
        }
        if (rating > fractionSize * 2) {
            color = 'positive';
        }
        return color;
    }
    /**
     * @param {?} eventCode
     * @return {?}
     */
    static isDigitKeyEventCode(eventCode) {
        return eventCode.indexOf('Digit') === 0;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StarRating {
    /**
     * @param {?} value
     * @return {?}
     */
    set rating(value) {
        this.setRating(value);
    }
    /**
     * @return {?}
     */
    get showHalfStars() {
        return this._showHalfStars;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showHalfStars(value) {
        this._showHalfStars = !!value;
        //update halfStarVisible
        this.setHalfStarVisible();
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this._id = value || '';
    }
    /**
     * @return {?}
     */
    get focus() {
        return this._focus;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set focus(value) {
        this._focus = !!value;
    }
    /**
     * @return {?}
     */
    get labelText() {
        return this._labelText;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set labelText(value) {
        this._labelText = value;
    }
    /**
     * @return {?}
     */
    get labelPosition() {
        return this._labelPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set labelPosition(value) {
        this._labelPosition = value || this.config.labelPosition;
    }
    /**
     * @return {?}
     */
    get labelVisible() {
        return this._labelVisible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set labelVisible(value) {
        this._labelVisible = !!value;
    }
    /**
     * @return {?}
     */
    get hoverEnabled() {
        return this._hoverEnabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hoverEnabled(value) {
        this._hoverEnabled = value !== undefined ? !!value : false;
    }
    /**
     * @return {?}
     */
    get staticColor() {
        return this._staticColor || this.config.staticColor || undefined;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set staticColor(value) {
        this._staticColor = value;
        //update color.
        this.setColor();
    }
    /**
     * @return {?}
     */
    get direction() {
        return this._direction;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set direction(value) {
        this._direction = value || undefined;
    }
    /**
     * @return {?}
     */
    get numOfStars() {
        return this._numOfStars;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set numOfStars(value) {
        this._numOfStars = value > 0 ? value : this.config.numOfStars;
        //update stars array
        this.stars = StarRatingUtils.getStarsArray(this.numOfStars);
        //update color
        this.setColor();
    }
    /**
     * @return {?}
     */
    get hoverRating() {
        return this._hoverRating;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hoverRating(value) {
        this._hoverRating = value > 0 ? value : 0;
    }
    /**
     * @return {?}
     */
    get speed() {
        return this._speed;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set speed(value) {
        this._speed = value || this.config.speed;
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size || this.config.size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set size(value) {
        this._size = value;
    }
    /**
     * @return {?}
     */
    get starType() {
        return this._starType || this.config.starType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set starType(value) {
        this._starType = value;
    }
    /**
     * @return {?}
     */
    get space() {
        return this._space;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set space(value) {
        this._space = value;
    }
    /**
     * @return {?}
     */
    get readOnly() {
        return this._readOnly;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set readOnly(value) {
        this._readOnly = !!value;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = !!value;
    }
    /**
     * @return {?}
     */
    get step() {
        return this._step;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set step(value) {
        this._step = value > 0 ? value : 1;
    }
    /**
     * @return {?}
     */
    get rating() {
        return this._rating;
    }
    /**
     * setRating
     * I use a setter function instead of a set method to enable overrides for this function.
     * @param {?} value
     * @return {?}
     */
    setRating(value) {
        //validate and apply newRating
        let /** @type {?} */ newRating = 0;
        if (value >= 0 && value <= this.numOfStars) {
            newRating = value;
        }
        //limit max value to max number of stars
        if (value > this.numOfStars) {
            newRating = this.numOfStars;
        }
        this._rating = newRating;
        //update ratingAsInteger. rating parsed to int for the value-[n] modifier
        this.ratingAsInteger = parseInt(this._rating.toString(), 10);
        //update halfStarsVisible
        this.setHalfStarVisible();
        //update calculated Color
        this.setColor();
    }
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        //set default ctrl props
        this.classEmpty = this.config.classEmpty;
        this.classHalf = this.config.classHalf;
        this.classFilled = this.config.classFilled;
        this.pathEmpty = this.config.svgPathEmpty;
        this.pathHalf = this.config.svgPathHalf;
        this.pathFilled = this.config.svgPathFilled;
        //set default Component Inputs
        if ('getColor' in this.config &&
            typeof this.config.getColor === 'function') {
            this.getColor = this.config.getColor;
        }
        if ('getHalfStarVisible' in this.config &&
            typeof this.config.getHalfStarVisible === 'function') {
            this.getHalfStarVisible = this.config.getHalfStarVisible;
        }
        this.numOfStars = this.config.numOfStars;
        this.rating = 0;
        this.step = 1;
    }
    /**
     * @return {?}
     */
    svgVisible() {
        return this.starType === 'svg';
    }
    /**
     * @return {?}
     */
    interactionPossible() {
        return !this.readOnly && !this.disabled;
    }
    /**
     * @param {?=} useHoverValue
     * @return {?}
     */
    setColor(useHoverValue = false) {
        //check if custom function is given
        const /** @type {?} */ ratingValue = useHoverValue ? this.hoverRating : this.rating;
        if (typeof this.getColor === 'function') {
            this.color = this.getColor(ratingValue, this.numOfStars, this.staticColor);
        }
        else {
            this.color = StarRatingUtils.getColor(ratingValue, this.numOfStars, this.staticColor);
        }
    }
    /**
     * @return {?}
     */
    setHalfStarVisible() {
        //update halfStarVisible
        if (this.showHalfStars) {
            //check if custom function is given
            if (typeof this.getHalfStarVisible === 'function') {
                this.halfStarVisible = this.getHalfStarVisible(this.rating);
            }
            else {
                this.halfStarVisible = StarRatingUtils.getHalfStarVisible(this.rating);
            }
        }
        else {
            this.halfStarVisible = false;
        }
    }
    /**
     * @return {?}
     */
    getComponentClassNames() {
        const /** @type {?} */ classNames = [];
        classNames.push(this.rating ? 'value-' + this.ratingAsInteger : 'value-0');
        classNames.push(this.halfStarVisible ? 'half' : '');
        classNames.push(this.hoverEnabled ? 'hover' : '');
        const /** @type {?} */ hoverRating = this.hoverRating
            ? 'hover-' + this.hoverRating
            : 'hover-0';
        classNames.push(this.hoverEnabled ? hoverRating : '');
        classNames.push(this.space ? 'space-' + this.space : '');
        classNames.push(this.labelPosition ? 'label-' + this.labelPosition : '');
        classNames.push(this.color ? 'color-' + this.color : '');
        classNames.push(this.starType ? 'star-' + this.starType : '');
        classNames.push(this.speed);
        classNames.push(this.size);
        classNames.push(this.readOnly ? 'read-only' : '');
        classNames.push(this.disabled ? 'disabled' : '');
        classNames.push(this.direction ? 'direction-' + this.direction : '');
        return classNames.join(' ');
    }
    /**
     * @return {?}
     */
    increment() {
        //increment to next higher step
        const /** @type {?} */ absDiff = Math.abs(this.rating % this.step);
        this.rating = this.rating + (absDiff > 0 ? this.step - absDiff : this.step);
    }
    /**
     * @return {?}
     */
    decrement() {
        //decrement to next lower step
        const /** @type {?} */ absDiff = Math.abs(this.rating % this.step);
        this.rating = this.rating - (absDiff > 0 ? absDiff : this.step);
    }
    /**
     * @return {?}
     */
    reset() {
        this.rating = 0;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Configuration service for the StarRating component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the star ratings used in the application.
 */
class StarRatingConfigService {
    constructor() {
        this._classEmpty = 'default-star-empty-icon';
        this._classHalf = 'default-star-half-icon';
        this._classFilled = 'default-star-filled-icon';
        this._numOfStars = 5;
        this._size = 'medium';
        this._labelPosition = 'left';
        this._speed = 'noticeable';
        this._starType = 'svg';
        this._assetsPath = 'assets/images/';
        this._svgPath = this.assetsPath + 'star-rating.icons.svg';
        this._svgEmptySymbolId = 'star-empty';
        this._svgHalfSymbolId = 'star-half';
        this._svgFilledSymbolId = 'star-filled';
        this._svgPathEmpty = this.svgPath + '#' + this.svgEmptySymbolId;
        this._svgPathHalf = this.svgPath + '#' + this.svgHalfSymbolId;
        this._svgPathFilled = this.svgPath + '#' + this.svgFilledSymbolId;
    }
    /**
     * @return {?}
     */
    get classEmpty() {
        return this._classEmpty;
    }
    /**
     * @param {?} classEmpty
     * @return {?}
     */
    set classEmpty(classEmpty) {
        this._classEmpty = classEmpty;
    }
    /**
     * @return {?}
     */
    get classHalf() {
        return this._classHalf;
    }
    /**
     * @param {?} classHalf
     * @return {?}
     */
    set classHalf(classHalf) {
        this._classHalf = classHalf;
    }
    /**
     * @return {?}
     */
    get classFilled() {
        return this._classFilled;
    }
    /**
     * @param {?} classFilled
     * @return {?}
     */
    set classFilled(classFilled) {
        this._classFilled = classFilled;
    }
    /**
     * @return {?}
     */
    get numOfStars() {
        return this._numOfStars;
    }
    /**
     * @param {?} numOfStars
     * @return {?}
     */
    set numOfStars(numOfStars) {
        this._numOfStars = numOfStars;
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    set size(size) {
        this._size = size;
    }
    /**
     * @return {?}
     */
    get staticColor() {
        return this._staticColor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set staticColor(value) {
        this._staticColor = value;
    }
    /**
     * @return {?}
     */
    get labelPosition() {
        return this._labelPosition;
    }
    /**
     * @param {?} labelPosition
     * @return {?}
     */
    set labelPosition(labelPosition) {
        this._labelPosition = labelPosition;
    }
    /**
     * @return {?}
     */
    get speed() {
        return this._speed;
    }
    /**
     * @param {?} speed
     * @return {?}
     */
    set speed(speed) {
        this._speed = speed;
    }
    /**
     * @return {?}
     */
    get starType() {
        return this._starType;
    }
    /**
     * @param {?} starType
     * @return {?}
     */
    set starType(starType) {
        this._starType = starType;
    }
    /**
     * @return {?}
     */
    get assetsPath() {
        return this._assetsPath;
    }
    /**
     * @param {?} assetsPath
     * @return {?}
     */
    set assetsPath(assetsPath) {
        this._assetsPath = assetsPath;
    }
    /**
     * @return {?}
     */
    get svgPath() {
        return this._svgPath;
    }
    /**
     * @param {?} svgPath
     * @return {?}
     */
    set svgPath(svgPath) {
        this._svgPath = svgPath;
    }
    /**
     * @return {?}
     */
    get svgEmptySymbolId() {
        return this._svgEmptySymbolId;
    }
    /**
     * @param {?} svgEmptySymbolId
     * @return {?}
     */
    set svgEmptySymbolId(svgEmptySymbolId) {
        this._svgEmptySymbolId = svgEmptySymbolId;
    }
    /**
     * @return {?}
     */
    get svgHalfSymbolId() {
        return this._svgHalfSymbolId;
    }
    /**
     * @param {?} svgHalfSymbolId
     * @return {?}
     */
    set svgHalfSymbolId(svgHalfSymbolId) {
        this._svgHalfSymbolId = svgHalfSymbolId;
    }
    /**
     * @return {?}
     */
    get svgFilledSymbolId() {
        return this._svgFilledSymbolId;
    }
    /**
     * @param {?} svgFilledSymbolId
     * @return {?}
     */
    set svgFilledSymbolId(svgFilledSymbolId) {
        this._svgFilledSymbolId = svgFilledSymbolId;
    }
    /**
     * @return {?}
     */
    get svgPathEmpty() {
        return this._svgPathEmpty;
    }
    /**
     * @param {?} svgPathEmpty
     * @return {?}
     */
    set svgPathEmpty(svgPathEmpty) {
        this._svgPathEmpty = svgPathEmpty;
    }
    /**
     * @return {?}
     */
    get svgPathHalf() {
        return this._svgPathHalf;
    }
    /**
     * @param {?} svgPathHalf
     * @return {?}
     */
    set svgPathHalf(svgPathHalf) {
        this._svgPathHalf = svgPathHalf;
    }
    /**
     * @return {?}
     */
    get svgPathFilled() {
        return this._svgPathFilled;
    }
    /**
     * @param {?} svgPathFilled
     * @return {?}
     */
    set svgPathFilled(svgPathFilled) {
        this._svgPathFilled = svgPathFilled;
    }
    /**
     * @param {?} rating
     * @param {?} numOfStars
     * @param {?=} staticColor
     * @return {?}
     */
    getColor(rating, numOfStars, staticColor) {
        rating = rating || 0;
        // if a fix color is set use this one
        if (staticColor) {
            return staticColor;
        }
        // calculate size of smallest fraction
        const /** @type {?} */ fractionSize = numOfStars / 3;
        // apply color by fraction
        let /** @type {?} */ color = 'default';
        if (rating > 0) {
            color = 'negative';
        }
        if (rating > fractionSize) {
            color = 'ok';
        }
        if (rating > fractionSize * 2) {
            color = 'positive';
        }
        return color;
    }
    /**
     * @param {?} rating
     * @return {?}
     */
    getHalfStarVisible(rating) {
        return Math.abs(rating % 1) > 0;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StarRatingComponent extends StarRating {
    /**
     * @param {?} config
     */
    constructor(config) {
        super(config);
        //Outputs
        this.starClickChange = new EventEmitter();
        this.ratingChange = new EventEmitter();
        this.hoverRatingChange = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    saveOnClick($event) {
        if (this.starClickChange) {
            this.starClickChange.emit($event);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    saveOnRatingChange($event) {
        if (this.ratingChange) {
            this.ratingChange.emit($event);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    saveOnHover($event) {
        if (this.hoverRatingChange) {
            this.hoverRatingChange.emit($event);
        }
    }
    /**
     * ACCESSIBILITY *
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (!this.interactionPossible()) {
            return;
        }
        const /** @type {?} */ handlers = {
            //Decrement
            Minus: () => this.decrement(),
            ArrowDown: () => this.decrement(),
            ArrowLeft: () => this.decrement(),
            //Increment
            Plus: () => this.increment(),
            ArrowRight: () => this.increment(),
            ArrowUp: () => this.increment(),
            //Reset
            Backspace: () => this.reset(),
            Delete: () => this.reset(),
            Digit0: () => this.reset()
        };
        const /** @type {?} */ handleDigits = (eventCode) => {
            const /** @type {?} */ dStr = 'Digit';
            const /** @type {?} */ digit = parseInt(eventCode.substr(dStr.length, eventCode.length - 1), 10);
            this.rating = digit;
        };
        if (handlers[event['code']] ||
            StarRatingUtils.isDigitKeyEventCode(event['code'])) {
            if (StarRatingUtils.isDigitKeyEventCode(event['code'])) {
                handleDigits(event['code']);
            }
            else {
                handlers[event['code']]();
            }
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * @param {?=} rating
     * @return {?}
     */
    onStarHover(rating) {
        if (!this.interactionPossible() || !this.hoverEnabled) {
            return;
        }
        this.hoverRating = rating ? parseInt(rating.toString(), 10) : 0;
        //update calculated Color
        this.setColor(true);
        //fire onHoverRatingChange event
        const /** @type {?} */ $event = { hoverRating: this.hoverRating };
        this.saveOnHover($event);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setRating(value) {
        const /** @type {?} */ initValue = this.rating;
        super.setRating(value);
        //if value changed trigger valueAccessor events and outputs
        if (initValue !== this.rating) {
            const /** @type {?} */ $event = { rating: this.rating };
            this.saveOnRatingChange($event);
        }
    }
    /**
     * onStarClicked
     *
     * Is fired when a star is clicked. And updated the rating value.
     * This function returns if the disabled or readOnly
     * property is set. If provided it emits the onClick event
     * handler with the actual rating value.
     *
     * @param {?} rating
     * @return {?}
     */
    onStarClicked(rating) {
        //fire onClick event
        if (!this.interactionPossible()) {
            return;
        }
        this.rating = rating;
        const /** @type {?} */ onClickEventObject = {
            rating: this.rating
        };
        this.saveOnClick(onClickEventObject);
    }
}
StarRatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'star-rating',
                inputs: [
                    'getHalfStarVisible',
                    'getColor',
                    'showHalfStars',
                    'hoverEnabled',
                    'rating',
                    'step',
                    'disabled',
                    'readOnly',
                    'space',
                    'starType',
                    'size',
                    'speed',
                    'numOfStars',
                    'direction',
                    'staticColor',
                    'labelPosition',
                    'labelText',
                    'id'
                ],
                outputs: ['starClickChange', 'ratingChange', 'hoverRatingChange'],
                styles: [],
                template: `<div id="{{id}}"
  class="rating {{getComponentClassNames()}}"
  tabindex="0"
  (keydown)="onKeyDown($event)"
  (mouseleave)="onStarHover(0)">
    <div *ngIf="labelText" class="label-value">{{labelText}}</div>
    <div class="star-container">
        <div class="star"
          (mouseenter)="onStarHover(star)"
          *ngFor="let star of stars"
          (click)="onStarClicked(star)">
            <i *ngIf="!svgVisible()" class="star-empty {{classEmpty}}"></i>
            <i *ngIf="!svgVisible()" class="star-half {{classHalf}}"></i>
            <i *ngIf="!svgVisible()" class="star-filled {{classFilled}}"></i>
            <svg *ngIf="svgVisible()" class="star-empty">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" [attr.xlink:href]="pathEmpty"></use>
            </svg>
            <svg *ngIf="svgVisible()" class="star-half">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" [attr.xlink:href]="pathHalf"></use>
            </svg>
            <svg *ngIf="svgVisible()" class="star-filled">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" [attr.xlink:href]="pathFilled"></use>
            </svg>
        </div>
    </div>
</div>
`
            },] },
];
/** @nocollapse */
StarRatingComponent.ctorParameters = () => [
    { type: StarRatingConfigService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const STAR_RATING_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StarRatingControlComponent),
    multi: true
};
class StarRatingControlComponent extends StarRating {
    /**
     * @param {?} config
     */
    constructor(config) {
        super(config);
        //Outputs
        this.starClickChange = new EventEmitter();
        this.ratingChange = new EventEmitter();
        this.hoverRatingChange = new EventEmitter();
        this.onModelChangeRegistered = false;
        this.onTouchRegistered = false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    saveOnClick($event) {
        if (this.starClickChange) {
            this.starClickChange.emit($event);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    saveOnRatingChange($event) {
        if (this.ratingChange) {
            this.ratingChange.emit($event);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    saveOnHover($event) {
        if (this.hoverRatingChange) {
            this.hoverRatingChange.emit($event);
        }
    }
    /**
     * @return {?}
     */
    saveOnTouch() {
        if (this.onTouchRegistered) {
            this.onTouch();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    saveOnModelChange(value) {
        if (this.onModelChangeRegistered) {
            this.onModelChange(value);
        }
    }
    /**
     * ACCESSIBILITY *
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (!this.interactionPossible()) {
            return;
        }
        const /** @type {?} */ handlers = {
            //Decrement
            Minus: () => this.decrement(),
            ArrowDown: () => this.decrement(),
            ArrowLeft: () => this.decrement(),
            //Increment
            Plus: () => this.increment(),
            ArrowRight: () => this.increment(),
            ArrowUp: () => this.increment(),
            //Reset
            Backspace: () => this.reset(),
            Delete: () => this.reset(),
            Digit0: () => this.reset()
        };
        const /** @type {?} */ handleDigits = (eventCode) => {
            const /** @type {?} */ dStr = 'Digit';
            const /** @type {?} */ digit = parseInt(eventCode.substr(dStr.length, eventCode.length - 1), 10);
            this.rating = digit;
        };
        if (handlers[event['code']] ||
            StarRatingUtils.isDigitKeyEventCode(event['code'])) {
            if (StarRatingUtils.isDigitKeyEventCode(event['code'])) {
                handleDigits(event['code']);
            }
            else {
                handlers[event['code']]();
            }
            event.preventDefault();
            event.stopPropagation();
        }
        this.saveOnTouch();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.focus = false;
        event.preventDefault();
        event.stopPropagation();
        this.saveOnTouch();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.focus = true;
        event.preventDefault();
        event.stopPropagation();
        this.saveOnTouch();
    }
    /**
     * @param {?=} rating
     * @return {?}
     */
    onStarHover(rating) {
        if (!this.interactionPossible() || !this.hoverEnabled) {
            return;
        }
        this.hoverRating = rating ? parseInt(rating.toString(), 10) : 0;
        //fire onHoverRatingChange event
        const /** @type {?} */ $event = { hoverRating: this.hoverRating };
        this.saveOnHover($event);
    }
    /**
     * Form Control - ControlValueAccessor implementation*
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this.rating = obj;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
        this.onModelChangeRegistered = true;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
        this.onTouchRegistered = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setRating(value) {
        const /** @type {?} */ initValue = this.rating;
        super.setRating(value);
        //if value changed trigger valueAccessor events and outputs
        if (initValue !== this.rating) {
            const /** @type {?} */ $event = { rating: this.rating };
            this.saveOnRatingChange($event);
            this.saveOnModelChange(this.rating);
        }
    }
    /**
     * onStarClicked
     *
     * Is fired when a star is clicked. And updated the rating value.
     * This function returns if the disabled or readOnly
     * property is set. If provided it emits the onClick event
     * handler with the actual rating value.
     *
     * @param {?} rating
     * @return {?}
     */
    onStarClicked(rating) {
        //fire onClick event
        if (!this.interactionPossible()) {
            return;
        }
        this.rating = rating;
        const /** @type {?} */ onClickEventObject = {
            rating: this.rating
        };
        this.saveOnClick(onClickEventObject);
    }
}
StarRatingControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'star-rating-control',
                providers: [STAR_RATING_CONTROL_ACCESSOR],
                inputs: [
                    'getHalfStarVisible',
                    'getColor',
                    'showHalfStars',
                    'hoverEnabled',
                    'rating',
                    'step',
                    'disabled',
                    'readOnly',
                    'space',
                    'starType',
                    'size',
                    'speed',
                    'numOfStars',
                    'direction',
                    'staticColor',
                    'labelPosition',
                    'labelText',
                    'id'
                ],
                outputs: ['starClickChange', 'ratingChange', 'hoverRatingChange'],
                styles: [],
                template: `<div id="{{id}}"
  class="rating {{getComponentClassNames()}}"
  tabindex="0"
  (keydown)="onKeyDown($event)"
  (blur)="onBlur($event)"
  (focus)="onFocus($event)"
  (mouseleave)="onStarHover(0)">
    <div *ngIf="labelText" class="label-value">{{labelText}}</div>
    <div class="star-container">
        <div class="star"
          (mouseenter)="onStarHover(star)"
          *ngFor="let star of stars"
          (click)="onStarClicked(star)">
            <i *ngIf="!svgVisible()" class="star-empty {{classEmpty}}"></i>
            <i *ngIf="!svgVisible()" class="star-half {{classHalf}}"></i>
            <i *ngIf="!svgVisible()" class="star-filled {{classFilled}}"></i>
            <svg *ngIf="svgVisible()" class="star-empty">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" [attr.xlink:href]="pathEmpty"></use>
            </svg>
            <svg *ngIf="svgVisible()" class="star-half">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" [attr.xlink:href]="pathHalf"></use>
            </svg>
            <svg *ngIf="svgVisible()" class="star-filled">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" [attr.xlink:href]="pathFilled"></use>
            </svg>
        </div>
    </div>
</div>
`
            },] },
];
/** @nocollapse */
StarRatingControlComponent.ctorParameters = () => [
    { type: StarRatingConfigService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const DECLARATIONS = [
    StarRatingComponent,
    StarRatingControlComponent
];
const EXPORTS = [DECLARATIONS];
class StarRatingModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: StarRatingModule,
            providers: [
                StarRatingConfigService
            ]
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: StarRatingModule,
            providers: []
        };
    }
}
StarRatingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [DECLARATIONS],
                exports: [EXPORTS]
            },] },
];
/** @nocollapse */
StarRatingModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { StarRatingConfig, StarRatingUtils, StarRating, StarRatingConfigService, StarRatingComponent, StarRatingControlComponent, StarRatingModule };
//# sourceMappingURL=angular-star-rating.js.map
