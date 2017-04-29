export type starRatingSizes = 'small' | 'medium' | 'large';
export type starRatingColor = 'default' | 'negative' | 'ok' | 'positive';
export type starRatingSpeed = 'immediately' | 'noticeable' | 'slow';
export type starRatingPosition = 'left' | 'right' | 'top' | 'bottom';
export type starRatingStarTypes = 'svg' | 'icon' | 'image';
export type starRatingStarSpace= 'no' | 'between' | 'around';
export type starRatingDirection= 'rtl' | 'ltr';

export interface IStarRatingOnClickEvent {
  rating: number;
}

export interface IStarRatingOnRatingChangeEven {
  rating: number;
}

export interface IStarRatingIOnHoverRatingChangeEvent {
  hoverRating : number;
}
