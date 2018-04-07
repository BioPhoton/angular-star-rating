import { Component, OnInit } from '@angular/core';
import { CustomLocalConfigService } from './custom-local-config.service';
import { StarRatingConfigService } from '@angular-star-rating-lib/angular-star-rating';

@Component({
  selector: 'custom-local-config',
  template: `
  <h2>Custom local config in lazy module</h2>
  <star-rating-comp></star-rating-comp>
  Change config over service method <br/>
  <button class="btn btn-sm btn-outline-info" (click)="changeSize()">changeSize</button>
  `,
  providers: [
    {
      provide: StarRatingConfigService,
      useClass: CustomLocalConfigService
    }
  ]
})
export class CustomLocalConfigComponent {
  constructor(private sRCS: StarRatingConfigService) {}

  changeSize() {
    console.log('changeSize');
    if (this.sRCS.size === 'large') {
      this.sRCS.size = 'small';
    } else {
      this.sRCS.size = 'large';
    }
  }
}
