import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-custom-style',
  template: `
    Custom Style
    <star-rating></star-rating>`,
  styleUrls: ['./custom-style.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class CustomStyleComponent { }
