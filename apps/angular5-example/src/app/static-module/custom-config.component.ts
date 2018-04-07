import { Component, OnInit } from '@angular/core';
import { StarRatingConfigService } from '@angular-star-rating-lib/angular-star-rating';

@Component({
  selector: 'custom-config',
  template: `
  <h1>Custom static configuration in static module</h1>
  <star-rating-comp></star-rating-comp>
  Change config over service method <br/>
  <button class="btn btn-sm btn-outline-info" (click)="changeSize()">changeSize</button>
  <custom-local-config></custom-local-config>
  `
})
export class CustomConfigComponent {
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
