import {Injectable} from '@angular/core';
import {
  IStarRatingCompBindings,
  starRatingSizes,
  starRatingSpeed,
  starRatingPosition,
  starRatingStarTypes,
  starRatingColors
} from "./star-rating-struct";

/**
 * Configuration service for the StarRating component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the star ratings used in the application.
 */
@Injectable()
export class StarRatingConfig implements IStarRatingCompBindings {

  classEmpty?: string = "default-star-empty-icon";

  classHalf?: string = "default-star-half-icon";

  classFilled?: string = "default-star-filled-icon";

  numOfStars?: number = 5;

  size?: starRatingSizes = "medium";

  speed?: starRatingSpeed = "noticeable";

  labelPosition?: starRatingPosition = "left";

  starType?: starRatingStarTypes = "svg";

  assetsPath?: string = "assets/images/";


  svgPath?: string = this.assetsPath + "star-rating.icons.svg";
  svgEmptySymbolId?: string = "star-empty";
  svgHalfSymbolId?: string = "star-half";
  svgFilledSymbolId?: string = "star-filled";

  svgPathEmpty?: string = this.svgPath + "#" + this.svgEmptySymbolId;

  svgPathHalf?: string = this.svgPath + "#" + this.svgHalfSymbolId;

  svgPathFilled?: string = this.svgPath + "#" + this.svgFilledSymbolId;

  getColor?:(rating: number, numOfStars: number, staticColor?: starRatingColors) => starRatingColors;

  getHalfStarVisible?: (rating: number) => boolean


}
