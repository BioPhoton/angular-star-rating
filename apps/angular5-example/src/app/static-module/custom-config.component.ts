import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-config',
  template: `
  <h1>Custom static configuration in static module</h1>
  <star-rating-comp></star-rating-comp>
  <custom-local-config></custom-local-config>
  `
})
export class CustomConfigComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
