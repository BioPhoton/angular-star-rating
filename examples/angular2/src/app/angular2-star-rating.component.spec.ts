import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2StarRatingAppComponent } from '../app/angular2-star-rating.component';

beforeEachProviders(() => [Angular2StarRatingAppComponent]);

describe('App: Angular2StarRating', () => {
  it('should create the app',
      inject([Angular2StarRatingAppComponent], (app: Angular2StarRatingAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-star-rating works!\'',
      inject([Angular2StarRatingAppComponent], (app: Angular2StarRatingAppComponent) => {
    expect(app.title).toEqual('angular2-star-rating works!');
  }));
});
