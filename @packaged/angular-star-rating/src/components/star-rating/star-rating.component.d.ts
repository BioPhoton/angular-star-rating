import { EventEmitter } from '@angular/core';
import { ClickEvent } from '../../interfaces/click-event.interface';
import { HoverRatingChangeEvent } from '../../interfaces/hover-rating-change-event.interface';
import { RatingChangeEvent } from '../../interfaces/rating-change-event.interface';
import { StarRating } from '../../services/star-rating';
import { StarRatingConfigService } from '../../services/star-rating-config.service';
export declare class StarRatingComponent extends StarRating {
    starClickChange: EventEmitter<ClickEvent>;
    ratingChange: EventEmitter<RatingChangeEvent>;
    hoverRatingChange: EventEmitter<HoverRatingChangeEvent>;
    saveOnClick($event: ClickEvent): void;
    saveOnRatingChange($event: RatingChangeEvent): void;
    saveOnHover($event: HoverRatingChangeEvent): void;
    /**ACCESSIBILITY **/
    onKeyDown(event: KeyboardEvent): void;
    onStarHover(rating?: number): void;
    constructor(config: StarRatingConfigService);
    setRating(value: number): void;
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
    onStarClicked(rating: number): void;
}
