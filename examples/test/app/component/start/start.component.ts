import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import {ItemService} from "./item.service";

@Component({
  moduleId: module.id,
  selector: 'start',
  templateUrl: 'start.component.html',
})
export class StartComponent implements OnInit, OnChanges {

  questions: any[];

  constructor(protected service:ItemService) {
   this.questions = service.getQuestions();
  }

  ngOnInit() {

  }

  ngOnChanges() {

  }
}
