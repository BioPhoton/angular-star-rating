import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-custom-style',
  template: `
    Custom Style
    <star-rating-comp></star-rating-comp>`,
  styleUrls: ['./custom-style.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class CustomStyleComponent { }
