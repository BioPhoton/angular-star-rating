import {Component, OnInit, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import {ConfigFormConfig} from "./config-form-config";

@Component({
  moduleId: module.id,
  selector: 'config-form',
  templateUrl: 'config-form.component.html',
})
export class ConfigFormComponent implements OnInit, OnChanges {

  constructor(config?:ConfigFormConfig) {

  }

  ngOnInit() {

  }

  ngOnChanges() {

  }

}
