import {Component, OnInit, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import {ItemService} from "./item.service";
import {IStarRatingOnClickEvent} from "angular-star-rating/src/star-rating-struct";
import {IStarRatingCompBindings} from "angular-star-rating/src//star-rating-struct";
import {IDynamicFormOnPayLoadChangeEvent} from "../../common/dynamic-form/dynamic-form-scruct";

@Component({
  moduleId: module.id,
  selector: 'start',
  templateUrl: 'start.component.html',
})
export class StartComponent implements OnInit, OnChanges {

  demoSelectionForm;
  demoForms:Array<any>;

  formItems: any[];
  formModel: {};

  starRatingConfig: IStarRatingCompBindings = {
    rating: 4,
    numOfStars: 7,
    size: "large",
    speed: "noticeable",
    labelPosition: "left",
    starType: "svg"
  };

  constructor(protected service: ItemService) {
    this.formItems = service.getConfigForm();

    this.formModel = this.starRatingConfig;
    this.demoForms = [
      {
        value: 'Star Rating Config',
        key: {
          formItems: service.getConfigForm(),
          formModel: {
            rating: 4,
            numOfStars: 7,
            size: "large",
          }
        }
      },
      {
        value: 'KitchenSink'
        , key: {
        forItems: service.getDemoset1()
      }
      }
    ];

  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  /*DEMO SELECT*/
  onSelectChange($event) {
    console.log('onSelectChange');
  }
  onDemoSelectionSubmit(value, valid) {
    console.log('onSelectChange', value, valid);
  }

  /*DYNAMIC FORM COMPONENT*/
  onPayloadChange($event) {
    console.log('onPayloadChange $event', $event);
    this.starRatingConfig = $event.payLoad;
  }

  /*STAR RATING COMPONENT*/
  onClick($event: IStarRatingOnClickEvent) {
    console.log('onClick $event', $event);
  }

  onRatingChange($event: IStarRatingOnClickEvent) {
    console.log('onRatingChange $event', $event);
    //create new ref
    this.starRatingConfig.rating = $event.rating;
    //this.starRatingConfig =  JSON.parse(JSON.stringify(this.starRatingConfig));

  }

}
