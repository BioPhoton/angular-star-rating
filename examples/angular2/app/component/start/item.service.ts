import {Injectable}       from '@angular/core';
import {ItemBase}     from '../../common/dynamic-form/item/item-base';
import {SelectQuestion} from '../../common/dynamic-form/item/item-select';
import {TextboxItem}  from '../../common/dynamic-form/item/item-textbox';
import {RadioItem} from "../../common/dynamic-form/item/item-radio";
import {CheckboxItem} from "../../common/dynamic-form/item/item-checkbox";

@Injectable()
export class ItemService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: ItemBase<any>[] = [
      // id
      new TextboxItem({
        key: 'id',
        label: 'Id',
        placeholder: "A string here",
        help: "The id attribute of the component",
        type: 'text'
      }),
      // rating
      new TextboxItem({
        key: 'labelText',
        label: 'Label Text',
        placeholder: "Show half stars",
        help: "the help text",
        type: 'text'
      }),
      // showHalfStars
      new CheckboxItem({
        key: 'showHalfStars',
        label: 'showHalfStars',
        value: 5,
        required: true,
      }),
      // numOfStars
      new TextboxItem({
        key: 'numOfStars',
        label: 'Number of stars',
        type: 'number',
        value: 5,
        required: true,
      }),
      // size
      // spread
      // staticColor
      new SelectQuestion({
        key: 'staticColor',
        label: 'Static color of the stars',
        options: [
          {key: 'default', value: 'Default'},
          {key: 'bad', value: 'Bad'},
          {key: 'ok', value: 'Ok'},
          {key: 'good', value: 'Good'}
        ]
      }),
      // disabled
      // starType
      // text
      // labelPosition
      // speed
      // direction
      // readOnly
      // getColor
      //showHalfStars
      new RadioItem({
        key: 'showHalfStars',
        label: 'Show half stars',
        options: [
          {key: 'yes', value: 'Yes'},
          {key: 'no', value: 'No'},
        ],
      }),
      // getHalfStarVisible
      // onClick
      // onRatingChange
    ];
    return questions.sort((a, b) => a.order - b.order);

  }
}
