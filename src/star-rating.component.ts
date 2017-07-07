import {Component, OnChanges, EventEmitter, forwardRef} from "@angular/core";
import {IStarRatingOnClickEvent, IStarRatingOnRatingChangeEven, IStarRatingIOnHoverRatingChangeEvent} from "./star-rating-struct";
import {StarRating} from "./star-rating";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

import {StarRatingUtils} from "./star-rating.utils";

const STAR_RATING_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StarRatingComponent),
    multi: true
};


@Component({
    selector: 'star-rating-comp',
    providers: [STAR_RATING_CONTROL_ACCESSOR],
    inputs: [
        'getHalfStarVisible'
        , 'getColor'
        , 'showHalfStars'
        , 'hoverEnabled'
        , 'rating'
        , 'step'
        , 'disabled'
        , 'readOnly'
        , 'space'
        , 'starType'
        , 'size'
        , 'speed'
        , 'numOfStars'
        , 'direction'
        , 'staticColor'
        , 'labelVisible'
        , 'labelPosition'
        , 'labelText'
        , 'id'
    ],
    outputs: [
          'onClick'
        , 'onRatingChange'
        , 'onHoverRatingChange'
    ],
    templateUrl: 'star-rating.component.html',
    styleUrls: ['star-rating.scss']
})
export class StarRatingComponent extends StarRating implements OnChanges, ControlValueAccessor {


    //Outputs
    ///////////////////////////////////////////////////////////////////////////////////////////

    onClick: EventEmitter<IStarRatingOnClickEvent> = new EventEmitter<IStarRatingOnClickEvent>();

    saveOnClick($event:IStarRatingOnClickEvent) {
        if(this.onClick) {
            this.onClick.emit($event);
        }
    }

    onRatingChange: EventEmitter<IStarRatingOnRatingChangeEven> = new EventEmitter<IStarRatingOnRatingChangeEven>();

    saveOnRatingChange($event:IStarRatingOnRatingChangeEven) {
        if(this.onRatingChange) {
            this.onRatingChange.emit($event);
        }
    }

    onHoverRatingChange: EventEmitter<IStarRatingIOnHoverRatingChangeEvent> = new EventEmitter<IStarRatingIOnHoverRatingChangeEvent>();

    saveOnHover($event:IStarRatingIOnHoverRatingChangeEvent) {
        if(this.onHoverRatingChange) {
            this.onHoverRatingChange.emit($event);
        }
    }


    onTouch: Function;
    onModelChange: Function;
    private onModelChangeRegistered: boolean = false;
    private onTouchRegistered: boolean = false;

    saveOnTouch() {
        if (this.onTouchRegistered) {
            this.onTouch();
        }
    }

    saveOnModelChange(value:number) {
        if (this.onModelChangeRegistered) {
            this.onModelChange(value);
        }
    }

    /**ACCESSIBILITY **/

    //Keyboard events
    onKeyDown(event: KeyboardEvent) {

        const handlers: any = {
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

        const handleDigits = (eventCode: string): void => {
            let dStr = "Digit";
            let digit: number = parseInt(eventCode.substr(dStr.length, eventCode.length-1));
            this.rating = digit;
        };

        if (handlers[event['code']] || StarRatingUtils.isDigitKeyEventCode(event['code'])) {
            if (StarRatingUtils.isDigitKeyEventCode(event['code'])) {
                handleDigits(event['code']);
            } else {
                handlers[event['code']]();
            }
            event.preventDefault();
            event.stopPropagation();
        }

        this.saveOnTouch();
    }

    //Focus events
    onBlur(event: FocusEvent) {
        this.focus = false;
        event.preventDefault();
        event.stopPropagation();
        this.saveOnTouch();
    }

    onFocus(event: FocusEvent) {
        this.focus = true;
        event.preventDefault();
        event.stopPropagation();
        this.saveOnTouch();
    }

    //Hover events
    onStarHover(rating?: number): void {

        if (!this.interactionPossible() || !this.hoverEnabled) {
            return;
        }

        this.hoverRating = rating?parseInt(rating.toString()):0;

        //fire onHoverRatingChange event
        let $event:IStarRatingIOnHoverRatingChangeEvent = { hoverRating: this.hoverRating};
        this.saveOnHover($event);


    }

    /**Form Control - ControlValueAccessor implementation**/

    writeValue(obj: any): void {
        this.rating = obj;
    }

    registerOnChange(fn: any): void {
        this.onModelChange = fn;
        this.onModelChangeRegistered = true;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
        this.onTouchRegistered = true;
    }

    constructor() {
        super();
    }

    //Overrides
    setRating(value: number): void {
        let initValue = this.rating;
        super.setRating(value);

            //if value changed trigger valueAccessor events and outputs
            if (initValue !== this.rating) {
                let $event: IStarRatingOnRatingChangeEven = {rating: this.rating};
                this.saveOnRatingChange($event);

                this.saveOnModelChange(this.rating);
            }

    };

    /**
     * onStarClicked
     *
     * Is fired when a star is clicked. And updated the rating value.
     * This function returns if the disabled or readOnly
     * property is set. If provided it emits the onClick event
     * handler with the actual rating value.
     *
     * @param rating
     */
    onStarClicked(rating: number): void {

        //fire onClick event
        let $event: IStarRatingOnClickEvent = {rating: rating};

        if (!this.interactionPossible()) {
            return;
        }

        this.rating = rating;

        let onClickEventObject: IStarRatingOnClickEvent = {
            rating: this.rating
        };
        this.saveOnClick(onClickEventObject);

    }

    /**
     * ngOnChanges
     * @param changes
     */
    ngOnChanges(changes: any): void {

    }

}
