import { Component, OnInit } from '@angular/core';
import {CustomLocalConfigService} from './custom-local-config.service';
import {StarRatingConfigService} from '@angular-star-rating-lib/angular-star-rating';

@Component({
  selector: 'custom-local-config',
  template: `
  <h2>Custom local config in static module</h2>
  <star-rating-comp></star-rating-comp>`,
  providers: [
    {
      provide: StarRatingConfigService, useClass: CustomLocalConfigService
    }
  ]
})
export class CustomLocalConfigComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
