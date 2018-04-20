import { __extends } from 'tslib';
import { Component, EventEmitter, forwardRef, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

var StarRatingConfig = /** @class */ (function () {
    function StarRatingConfig() {
    }
    return StarRatingConfig;
}());
var StarRatingUtils = /** @class */ (function () {
    function StarRatingUtils() {
    }
    StarRatingUtils.getStarsArray = function (numOfStars) {
        var stars = [];
        for (var i = 0; i < numOfStars; i++) {
            stars.push(i + 1);
        }
        return stars;
    };
    StarRatingUtils.getHalfStarVisible = function (rating) {
        return Math.abs(rating % 1) > 0;
    };
    StarRatingUtils.getColor = function (rating, numOfStars, staticColor) {
        rating = rating || 0;
        if (staticColor) {
            return staticColor;
        }
        var fractionSize = numOfStars / 3;
        var color = 'default';
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
    };
    StarRatingUtils.isDigitKeyEventCode = function (eventCode) {
        return eventCode.indexOf('Digit') === 0;
    };
    return StarRatingUtils;
}());
var StarRating = /** @class */ (function () {
    function StarRating(config) {
        this.config = config;
        this.classEmpty = this.config.classEmpty;
        this.classHalf = this.config.classHalf;
        this.classFilled = this.config.classFilled;
        this.pathEmpty = this.config.svgPathEmpty;
        this.pathHalf = this.config.svgPathHalf;
        this.pathFilled = this.config.svgPathFilled;
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
    Object.defineProperty(StarRating.prototype, "rating", {
        get: function () {
            return this._rating;
        },
        set: function (value) {
            this.setRating(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "showHalfStars", {
        get: function () {
            return this._showHalfStars;
        },
        set: function (value) {
            this._showHalfStars = !!value;
            this.setHalfStarVisible();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "focus", {
        get: function () {
            return this._focus;
        },
        set: function (value) {
            this._focus = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "labelText", {
        get: function () {
            return this._labelText;
        },
        set: function (value) {
            this._labelText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "labelPosition", {
        get: function () {
            return this._labelPosition;
        },
        set: function (value) {
            this._labelPosition = value || this.config.labelPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "labelVisible", {
        get: function () {
            return this._labelVisible;
        },
        set: function (value) {
            this._labelVisible = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "hoverEnabled", {
        get: function () {
            return this._hoverEnabled;
        },
        set: function (value) {
            this._hoverEnabled = value !== undefined ? !!value : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "staticColor", {
        get: function () {
            return this._staticColor || this.config.staticColor || undefined;
        },
        set: function (value) {
            this._staticColor = value;
            this.setColor();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (value) {
            this._direction = value || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "numOfStars", {
        get: function () {
            return this._numOfStars;
        },
        set: function (value) {
            this._numOfStars = value > 0 ? value : this.config.numOfStars;
            this.stars = StarRatingUtils.getStarsArray(this.numOfStars);
            this.setColor();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "hoverRating", {
        get: function () {
            return this._hoverRating;
        },
        set: function (value) {
            this._hoverRating = value > 0 ? value : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value || this.config.speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "size", {
        get: function () {
            return this._size || this.config.size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "starType", {
        get: function () {
            return this._starType || this.config.starType;
        },
        set: function (value) {
            this._starType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "space", {
        get: function () {
            return this._space;
        },
        set: function (value) {
            this._space = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (value) {
            this._readOnly = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "step", {
        get: function () {
            return this._step;
        },
        set: function (value) {
            this._step = value > 0 ? value : 1;
        },
        enumerable: true,
        configurable: true
    });
    StarRating.prototype.setRating = function (value) {
        var newRating = 0;
        if (value >= 0 && value <= this.numOfStars) {
            newRating = value;
        }
        if (value > this.numOfStars) {
            newRating = this.numOfStars;
        }
        this._rating = newRating;
        this.ratingAsInteger = parseInt(this._rating.toString(), 10);
        this.setHalfStarVisible();
        this.setColor();
    };
    StarRating.prototype.svgVisible = function () {
        return this.starType === 'svg';
    };
    StarRating.prototype.interactionPossible = function () {
        return !this.readOnly && !this.disabled;
    };
    StarRating.prototype.setColor = function (useHoverValue) {
        if (useHoverValue === void 0) { useHoverValue = false; }
        var ratingValue = useHoverValue ? this.hoverRating : this.rating;
        if (typeof this.getColor === 'function') {
            this.color = this.getColor(ratingValue, this.numOfStars, this.staticColor);
        }
        else {
            this.color = StarRatingUtils.getColor(ratingValue, this.numOfStars, this.staticColor);
        }
    };
    StarRating.prototype.setHalfStarVisible = function () {
        if (this.showHalfStars) {
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
    };
    StarRating.prototype.getComponentClassNames = function () {
        var classNames = [];
        classNames.push(this.rating ? 'value-' + this.ratingAsInteger : 'value-0');
        classNames.push(this.halfStarVisible ? 'half' : '');
        classNames.push(this.hoverEnabled ? 'hover' : '');
        var hoverRating = this.hoverRating
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
    };
    StarRating.prototype.increment = function () {
        var absDiff = Math.abs(this.rating % this.step);
        this.rating = this.rating + (absDiff > 0 ? this.step - absDiff : this.step);
    };
    StarRating.prototype.decrement = function () {
        var absDiff = Math.abs(this.rating % this.step);
        this.rating = this.rating - (absDiff > 0 ? absDiff : this.step);
    };
    StarRating.prototype.reset = function () {
        this.rating = 0;
    };
    return StarRating;
}());
var StarRatingConfigService = /** @class */ (function () {
    function StarRatingConfigService() {
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
    Object.defineProperty(StarRatingConfigService.prototype, "classEmpty", {
        get: function () {
            return this._classEmpty;
        },
        set: function (classEmpty) {
            this._classEmpty = classEmpty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "classHalf", {
        get: function () {
            return this._classHalf;
        },
        set: function (classHalf) {
            this._classHalf = classHalf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "classFilled", {
        get: function () {
            return this._classFilled;
        },
        set: function (classFilled) {
            this._classFilled = classFilled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "numOfStars", {
        get: function () {
            return this._numOfStars;
        },
        set: function (numOfStars) {
            this._numOfStars = numOfStars;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (size) {
            this._size = size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "staticColor", {
        get: function () {
            return this._staticColor;
        },
        set: function (value) {
            this._staticColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "labelPosition", {
        get: function () {
            return this._labelPosition;
        },
        set: function (labelPosition) {
            this._labelPosition = labelPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (speed) {
            this._speed = speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "starType", {
        get: function () {
            return this._starType;
        },
        set: function (starType) {
            this._starType = starType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "assetsPath", {
        get: function () {
            return this._assetsPath;
        },
        set: function (assetsPath) {
            this._assetsPath = assetsPath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "svgPath", {
        get: function () {
            return this._svgPath;
        },
        set: function (svgPath) {
            this._svgPath = svgPath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "svgEmptySymbolId", {
        get: function () {
            return this._svgEmptySymbolId;
        },
        set: function (svgEmptySymbolId) {
            this._svgEmptySymbolId = svgEmptySymbolId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "svgHalfSymbolId", {
        get: function () {
            return this._svgHalfSymbolId;
        },
        set: function (svgHalfSymbolId) {
            this._svgHalfSymbolId = svgHalfSymbolId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "svgFilledSymbolId", {
        get: function () {
            return this._svgFilledSymbolId;
        },
        set: function (svgFilledSymbolId) {
            this._svgFilledSymbolId = svgFilledSymbolId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "svgPathEmpty", {
        get: function () {
            return this._svgPathEmpty;
        },
        set: function (svgPathEmpty) {
            this._svgPathEmpty = svgPathEmpty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "svgPathHalf", {
        get: function () {
            return this._svgPathHalf;
        },
        set: function (svgPathHalf) {
            this._svgPathHalf = svgPathHalf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRatingConfigService.prototype, "svgPathFilled", {
        get: function () {
            return this._svgPathFilled;
        },
        set: function (svgPathFilled) {
            this._svgPathFilled = svgPathFilled;
        },
        enumerable: true,
        configurable: true
    });
    StarRatingConfigService.prototype.getColor = function (rating, numOfStars, staticColor) {
        rating = rating || 0;
        if (staticColor) {
            return staticColor;
        }
        var fractionSize = numOfStars / 3;
        var color = 'default';
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
    };
    StarRatingConfigService.prototype.getHalfStarVisible = function (rating) {
        return Math.abs(rating % 1) > 0;
    };
    return StarRatingConfigService;
}());
var StarRatingComponent = /** @class */ (function (_super) {
    __extends(StarRatingComponent, _super);
    function StarRatingComponent(config) {
        var _this = _super.call(this, config) || this;
        _this.starClickChange = new EventEmitter();
        _this.ratingChange = new EventEmitter();
        _this.hoverRatingChange = new EventEmitter();
        return _this;
    }
    StarRatingComponent.prototype.saveOnClick = function ($event) {
        if (this.starClickChange) {
            this.starClickChange.emit($event);
        }
    };
    StarRatingComponent.prototype.saveOnRatingChange = function ($event) {
        if (this.ratingChange) {
            this.ratingChange.emit($event);
        }
    };
    StarRatingComponent.prototype.saveOnHover = function ($event) {
        if (this.hoverRatingChange) {
            this.hoverRatingChange.emit($event);
        }
    };
    StarRatingComponent.prototype.onKeyDown = function (event) {
        var _this = this;
        if (!this.interactionPossible()) {
            return;
        }
        var handlers = {
            Minus: function () { return _this.decrement(); },
            ArrowDown: function () { return _this.decrement(); },
            ArrowLeft: function () { return _this.decrement(); },
            Plus: function () { return _this.increment(); },
            ArrowRight: function () { return _this.increment(); },
            ArrowUp: function () { return _this.increment(); },
            Backspace: function () { return _this.reset(); },
            Delete: function () { return _this.reset(); },
            Digit0: function () { return _this.reset(); }
        };
        var handleDigits = function (eventCode) {
            var dStr = 'Digit';
            var digit = parseInt(eventCode.substr(dStr.length, eventCode.length - 1), 10);
            _this.rating = digit;
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
    };
    StarRatingComponent.prototype.onStarHover = function (rating) {
        if (!this.interactionPossible() || !this.hoverEnabled) {
            return;
        }
        this.hoverRating = rating ? parseInt(rating.toString(), 10) : 0;
        this.setColor(true);
        var $event = { hoverRating: this.hoverRating };
        this.saveOnHover($event);
    };
    StarRatingComponent.prototype.setRating = function (value) {
        var initValue = this.rating;
        _super.prototype.setRating.call(this, value);
        if (initValue !== this.rating) {
            var $event = { rating: this.rating };
            this.saveOnRatingChange($event);
        }
    };
    StarRatingComponent.prototype.onStarClicked = function (rating) {
        if (!this.interactionPossible()) {
            return;
        }
        this.rating = rating;
        var onClickEventObject = {
            rating: this.rating
        };
        this.saveOnClick(onClickEventObject);
    };
    return StarRatingComponent;
}(StarRating));
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
                template: "<div id=\"{{id}}\"\n  class=\"rating {{getComponentClassNames()}}\"\n  tabindex=\"0\"\n  (keydown)=\"onKeyDown($event)\"\n  (mouseleave)=\"onStarHover(0)\">\n    <div *ngIf=\"labelText\" class=\"label-value\">{{labelText}}</div>\n    <div class=\"star-container\">\n        <div class=\"star\"\n          (mouseenter)=\"onStarHover(star)\"\n          *ngFor=\"let star of stars\"\n          (click)=\"onStarClicked(star)\">\n            <i *ngIf=\"!svgVisible()\" class=\"star-empty {{classEmpty}}\"></i>\n            <i *ngIf=\"!svgVisible()\" class=\"star-half {{classHalf}}\"></i>\n            <i *ngIf=\"!svgVisible()\" class=\"star-filled {{classFilled}}\"></i>\n            <svg *ngIf=\"svgVisible()\" class=\"star-empty\">\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" [attr.xlink:href]=\"pathEmpty\"></use>\n            </svg>\n            <svg *ngIf=\"svgVisible()\" class=\"star-half\">\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" [attr.xlink:href]=\"pathHalf\"></use>\n            </svg>\n            <svg *ngIf=\"svgVisible()\" class=\"star-filled\">\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" [attr.xlink:href]=\"pathFilled\"></use>\n            </svg>\n        </div>\n    </div>\n</div>\n"
            },] },
];
StarRatingComponent.ctorParameters = function () { return [
    { type: StarRatingConfigService, },
]; };
var STAR_RATING_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return StarRatingControlComponent; }),
    multi: true
};
var StarRatingControlComponent = /** @class */ (function (_super) {
    __extends(StarRatingControlComponent, _super);
    function StarRatingControlComponent(config) {
        var _this = _super.call(this, config) || this;
        _this.starClickChange = new EventEmitter();
        _this.ratingChange = new EventEmitter();
        _this.hoverRatingChange = new EventEmitter();
        _this.onModelChangeRegistered = false;
        _this.onTouchRegistered = false;
        return _this;
    }
    StarRatingControlComponent.prototype.saveOnClick = function ($event) {
        if (this.starClickChange) {
            this.starClickChange.emit($event);
        }
    };
    StarRatingControlComponent.prototype.saveOnRatingChange = function ($event) {
        if (this.ratingChange) {
            this.ratingChange.emit($event);
        }
    };
    StarRatingControlComponent.prototype.saveOnHover = function ($event) {
        if (this.hoverRatingChange) {
            this.hoverRatingChange.emit($event);
        }
    };
    StarRatingControlComponent.prototype.saveOnTouch = function () {
        if (this.onTouchRegistered) {
            this.onTouch();
        }
    };
    StarRatingControlComponent.prototype.saveOnModelChange = function (value) {
        if (this.onModelChangeRegistered) {
            this.onModelChange(value);
        }
    };
    StarRatingControlComponent.prototype.onKeyDown = function (event) {
        var _this = this;
        if (!this.interactionPossible()) {
            return;
        }
        var handlers = {
            Minus: function () { return _this.decrement(); },
            ArrowDown: function () { return _this.decrement(); },
            ArrowLeft: function () { return _this.decrement(); },
            Plus: function () { return _this.increment(); },
            ArrowRight: function () { return _this.increment(); },
            ArrowUp: function () { return _this.increment(); },
            Backspace: function () { return _this.reset(); },
            Delete: function () { return _this.reset(); },
            Digit0: function () { return _this.reset(); }
        };
        var handleDigits = function (eventCode) {
            var dStr = 'Digit';
            var digit = parseInt(eventCode.substr(dStr.length, eventCode.length - 1), 10);
            _this.rating = digit;
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
    };
    StarRatingControlComponent.prototype.onBlur = function (event) {
        this.focus = false;
        event.preventDefault();
        event.stopPropagation();
        this.saveOnTouch();
    };
    StarRatingControlComponent.prototype.onFocus = function (event) {
        this.focus = true;
        event.preventDefault();
        event.stopPropagation();
        this.saveOnTouch();
    };
    StarRatingControlComponent.prototype.onStarHover = function (rating) {
        if (!this.interactionPossible() || !this.hoverEnabled) {
            return;
        }
        this.hoverRating = rating ? parseInt(rating.toString(), 10) : 0;
        var $event = { hoverRating: this.hoverRating };
        this.saveOnHover($event);
    };
    StarRatingControlComponent.prototype.writeValue = function (obj) {
        this.rating = obj;
    };
    StarRatingControlComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
        this.onModelChangeRegistered = true;
    };
    StarRatingControlComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
        this.onTouchRegistered = true;
    };
    StarRatingControlComponent.prototype.setRating = function (value) {
        var initValue = this.rating;
        _super.prototype.setRating.call(this, value);
        if (initValue !== this.rating) {
            var $event = { rating: this.rating };
            this.saveOnRatingChange($event);
            this.saveOnModelChange(this.rating);
        }
    };
    StarRatingControlComponent.prototype.onStarClicked = function (rating) {
        if (!this.interactionPossible()) {
            return;
        }
        this.rating = rating;
        var onClickEventObject = {
            rating: this.rating
        };
        this.saveOnClick(onClickEventObject);
    };
    return StarRatingControlComponent;
}(StarRating));
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
                template: "<div id=\"{{id}}\"\n  class=\"rating {{getComponentClassNames()}}\"\n  tabindex=\"0\"\n  (keydown)=\"onKeyDown($event)\"\n  (blur)=\"onBlur($event)\"\n  (focus)=\"onFocus($event)\"\n  (mouseleave)=\"onStarHover(0)\">\n    <div *ngIf=\"labelText\" class=\"label-value\">{{labelText}}</div>\n    <div class=\"star-container\">\n        <div class=\"star\"\n          (mouseenter)=\"onStarHover(star)\"\n          *ngFor=\"let star of stars\"\n          (click)=\"onStarClicked(star)\">\n            <i *ngIf=\"!svgVisible()\" class=\"star-empty {{classEmpty}}\"></i>\n            <i *ngIf=\"!svgVisible()\" class=\"star-half {{classHalf}}\"></i>\n            <i *ngIf=\"!svgVisible()\" class=\"star-filled {{classFilled}}\"></i>\n            <svg *ngIf=\"svgVisible()\" class=\"star-empty\">\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" [attr.xlink:href]=\"pathEmpty\"></use>\n            </svg>\n            <svg *ngIf=\"svgVisible()\" class=\"star-half\">\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" [attr.xlink:href]=\"pathHalf\"></use>\n            </svg>\n            <svg *ngIf=\"svgVisible()\" class=\"star-filled\">\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" [attr.xlink:href]=\"pathFilled\"></use>\n            </svg>\n        </div>\n    </div>\n</div>\n"
            },] },
];
StarRatingControlComponent.ctorParameters = function () { return [
    { type: StarRatingConfigService, },
]; };
var DECLARATIONS = [
    StarRatingComponent,
    StarRatingControlComponent
];
var EXPORTS = [DECLARATIONS];
var StarRatingModule = /** @class */ (function () {
    function StarRatingModule() {
    }
    StarRatingModule.forRoot = function () {
        return {
            ngModule: StarRatingModule,
            providers: [
                StarRatingConfigService
            ]
        };
    };
    StarRatingModule.forChild = function () {
        return {
            ngModule: StarRatingModule,
            providers: []
        };
    };
    return StarRatingModule;
}());
StarRatingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [DECLARATIONS],
                exports: [EXPORTS]
            },] },
];
StarRatingModule.ctorParameters = function () { return []; };

export { StarRatingConfig, StarRatingUtils, StarRating, StarRatingConfigService, StarRatingComponent, StarRatingControlComponent, StarRatingModule };
//# sourceMappingURL=angular-star-rating.js.map
