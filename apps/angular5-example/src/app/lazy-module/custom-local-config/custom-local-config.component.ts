import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-local-config',
  template: `
  <h2>Custom local config</h2>
  <star-rating-comp></star-rating-comp>`
})
export class CustomLocalConfigComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
