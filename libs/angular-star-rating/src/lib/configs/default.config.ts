import { starRatingColor } from '../interfaces/star-rating-config.interface';

export class DefaultConfig {
  classEmpty = 'default-star-empty-icon';
  classHalf = 'default-star-half-icon';
  classFilled = 'default-star-filled-icon';
  numOfStars = 5;
  size = 'medium';
  speed = 'noticeable';
  labelPosition = 'left';
  starType = 'svg';
  assetsPath = 'assets/images/';
  svgPath = this.assetsPath + 'star-rating.icons.svg';
  svgEmptySymbolId = 'star-empty';
  svgHalfSymbolId = 'star-half';
  svgFilledSymbolId = 'star-filled';
  svgPathEmpty = this.svgPath + '#' + this.svgEmptySymbolId;
  svgPathHalf = this.svgPath + '#' + this.svgHalfSymbolId;
  svgPathFilled = this.svgPath + '#' + this.svgFilledSymbolId;

  getColor(
    rating: number,
    numOfStars: number,
    staticColor?: starRatingColor
  ): starRatingColor {
    rating = rating || 0;

    // if a fix color is set use this one
    if (staticColor) {
      return staticColor;
    }

    // calculate size of smallest fraction
    const fractionSize = numOfStars / 3;

    // apply color by fraction
    let color: starRatingColor = 'default';
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

  getHalfStarVisible(rating: number): boolean {
    return Math.abs(rating % 1) > 0;
  }
}
