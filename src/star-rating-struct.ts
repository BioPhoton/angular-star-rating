export type starRatingSizes = "small" | "medium" | "large";
export type starRatingColors = "default" | "negative" | "ok" | "positive";
export type starRatingSpeed = "immediately" | "noticeable" | "slow";
export type starRatingPosition = "left" | "right" | "top" | "bottom";
export type starRatingStarTypes = "svg" | "icon" | "image";
export type starRatingStarSpace= "no" | "between" | "around";

export interface IStarRatingOnClickEvent {
  rating: number;
}

export interface IStarRatingOnRatingChangeEven {
  rating: number;
}
