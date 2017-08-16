import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  OnClickEvent,
  OnHoverRatingChangeEvent,
  OnRatingChangeEven,
  starRatingColor,
  starRatingPosition,
  starRatingSizes,
  starRatingSpeed,
  starRatingStarSpace,
  starRatingStarTypes
} from 'angular-star-rating';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

@Component({
  selector: 'bindings-config-form',
  templateUrl: './bindings-config-form.component.html',
  styleUrls: ['./bindings-config-form.component.scss']
})
export class BindingsConfigFormComponent implements OnInit, OnDestroy{

  private onDestroy$: Subject<boolean> = new Subject<boolean>();

  //option sets
  colorOptions: Array<starRatingColor | string> = ['default', 'negative', 'ok', 'positive'];
  labelPositionOptions: Array<starRatingPosition | string> = ['top', 'right', 'left', 'bottom'];
  starOptions: Array<starRatingStarTypes> = ['svg', 'icon', 'image'];
  speedOptions: Array<starRatingSpeed> = ['immediately', 'noticeable', 'slow'];
  sizeOptions: Array<starRatingSizes> = ['small', 'medium', 'large'];
  spaceOptions: Array<starRatingStarSpace | string> = ['around', 'between', 'no'];

  bindingsForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.setupForm();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
  }

  setupForm() {
    this.bindingsForm = this.fb.group({
      //component input properties (> bindings)
      id: ['10'],
      //pathEmpty: string;
      //pathFilled:string;
      numOfStars: [5],
      rating: [3.5],
      labelText: ['My Text'],
      labelVisible: [false],
      labelPosition: ['top'],
      staticColor: [],
      speed: ['slow'],
      size: [7],
      space: [false],
      step: [],
      starType: ['svg'],
      direction: [],
      readOnly: [false],
      disabled: [false],
      showHalfStars: [false],
      showHoverStars: [true],
      hoverEnabled: [true],
      //component input functions (> bindings)
      getColor: [],
      useCustomCetColor: [false],
      getHalfStarVisible: [],
      useCustomGetHalfStarVisible: [false],
    });
  }

  //component output (& bindings)
  onHover($event: OnHoverRatingChangeEvent): void {
    console.log('single onHover rating: ', $event.hoverRating);
  }

  onClick($event: OnClickEvent): void {
    console.log('single onClick rating: ', $event.rating);
  }

  onHoverRatingChange($event: OnHoverRatingChangeEvent): void {
    console.log('single OnHoverRatingChangeEven rating: ', $event.hoverRating);
    // this.bindingsForm.get('hoverRating').setValue($event.hoverRating);
  }

  onRatingChange($event: OnRatingChangeEven): void {
    console.log('single onRatingChange rating: ', $event.rating);
    this.bindingsForm.get('rating').setValue($event.rating);
  }

  updateGetColorBinding() {
    if (this.bindingsForm.get('useCustomCetColor').value) {
      this.bindingsForm.get('getColor').setValue(this._getColor);
    }
    else {
      this.bindingsForm.get('getColor').setValue(undefined);
    }
  }

  updateGetHalfStarVisibleBinding() {
    this.bindingsForm.get('useCustomGetHalfStarVisible')
      .valueChanges
      .takeUntil(this.onDestroy$)
      .subscribe(
        (v) => {
          if (v) {
            this.bindingsForm.get('getHalfStarVisible').setValue(this._getHalfStarVisible);
          }
          else {
            this.bindingsForm.get('getHalfStarVisible').setValue(() => {});
          }
        }
      )
  }

  _getColor(rating: number | string, numOfStars: number, staticColor: string): string {
    console.log('getColor rating: ', rating, 'numOfStars: ', numOfStars, 'fixColor: ', staticColor);
    let colors = ['default', 'negative', 'ok', 'positive'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  _getHalfStarVisible(rating: number): boolean {
    console.log('getHalfStarVisible rating: ', rating, rating % 1);
    return (rating < 3);
  }

}
