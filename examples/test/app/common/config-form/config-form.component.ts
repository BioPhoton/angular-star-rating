import {Component, OnInit, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import {ConfigFormConfig} from "./config-form-config";

@Component({
  selector: 'config-form',
  templateUrl: 'app/common/config-form/config-form.component.html',
})
export class ConfigFormComponent implements OnInit, OnChanges {

  constructor(config?:ConfigFormConfig) {

  }

  ngOnInit() {

  }

  ngOnChanges() {

  }
}
