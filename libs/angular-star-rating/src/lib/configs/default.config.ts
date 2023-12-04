import { starRatingColor } from '../interfaces/star-rating-config.interface';

export class DefaultConfig {
  public classEmpty = 'default-star-empty-icon';
  public classHalf = 'default-star-half-icon';
  public classFilled = 'default-star-filled-icon';
  public numOfStars = 5;
  public size = 'medium';
  public speed = 'noticeable';
  public labelPosition = 'left';
  public starType = 'svg';
  public assetsPath = 'assets/images/';
  public svgPath = this.assetsPath + 'star-rating.icons.svg';
  public svgEmptySymbolId = 'star-empty';
  public svgHalfSymbolId = 'star-half';
  public svgFilledSymbolId = 'star-filled';
  public svgPathEmpty = this.svgPath + '#' + this.svgEmptySymbolId;
  public svgPathHalf = this.svgPath + '#' + this.svgHalfSymbolId;
  public svgPathFilled = this.svgPath + '#' + this.svgFilledSymbolId;

  public getColor(
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

  public getHalfStarVisible(rating: number): boolean {
    return Math.abs(rating % 1) > 0;
  }
}
