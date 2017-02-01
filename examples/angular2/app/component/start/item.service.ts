import {Injectable}       from '@angular/core';
import {ItemBase}     from '../../common/dynamic-form/item/item-base';
import {SelectQuestion} from '../../common/dynamic-form/item/item-select';
import {TextboxItem}  from '../../common/dynamic-form/item/item-textbox';
import {RadioItem} from "../../common/dynamic-form/item/item-radio";
import {CheckboxItem} from "../../common/dynamic-form/item/item-checkbox";
import {MultiselectQuestion} from "../../common/dynamic-form/item/item-multiselect";
import {ButtonItem} from "../../common/dynamic-form/item/item-button";

@Injectable()
export class ItemService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getConfigForm() {

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
        key: 'rating',
        label: 'Rating',
        placeholder: "The rating",
        help: "Number of stars selected",
        type: 'number'
      }),
      // showHalfStars
      new CheckboxItem({
        key: 'showHalfStars',
        label: 'showHalfStars',
        value: 5,
      }),
      // numOfStars
      new TextboxItem({
        key: 'numOfStars',
        label: 'Number of stars',
        type: 'number',
        value: 5,
      }),
      // size
      new SelectQuestion({
        key: 'size',
        label: 'Stars size',
        options: [
          {key: 'small', value: 'Small'},
          {key: 'medium', value: 'Medium'},
          {key: 'large', value: 'Large'}
        ]
      }),
      // spread
      new SelectQuestion({
        key: 'spread',
        label: 'Stars spread',
        options: [
          {key: 'no', value: 'No Spread'},
          {key: 'around', value: 'Space around'},
          {key: 'between', value: 'Space between'}
        ]
      }),
      // staticColor
      new MultiselectQuestion({
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
      new CheckboxItem({
        key: 'disabled',
        label: 'Disabled'
      }),
      // starType
      new SelectQuestion({
        key: 'starType',
        label: 'Type of the stars',
        options: [
          {key: 'svg', value: 'Svg'},
          {key: 'icon', value: 'Icon'},
          {key: 'custom-icon', value: 'Custom Icon'},
        ]
      }),
      // text
      new TextboxItem({
        key: 'text',
        label: 'Label text',
        type: 'string'
      }),
      // labelPosition
      new SelectQuestion({
        key: 'labelPosition',
        label: 'Label Position',
        options: [
          {key: 'top', value: 'Top'},
          {key: 'right', value: 'Right'},
          {key: 'left', value: 'Left'},
          {key: 'bottom', value: 'Bottom'}
        ]
      }),
      // speed
      new SelectQuestion({
        key: 'speed',
        label: 'Animation Speed',
        options: [
          {key: 'immediately', value: 'Immediately'},
          {key: 'noticeable', value: 'Noticeable'},
          {key: 'slow', value: 'Slow'}
        ]
      }),
      // direction
      new SelectQuestion({
        key: 'direction',
        label: 'Direction',
        options: [
          {key: 'rtl', value: 'Right to left'},
          {key: 'ltr', value: 'Left to right'}
        ]
      }),
      // readOnly
      new CheckboxItem({
        key: 'readOnly',
        label: 'Read Only'
      }),
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
      new ButtonItem({
        key: 'submit-button',
        label: 'Reset',
        type: 'reset'
      })
      // getHalfStarVisible

      // onClick
      // onRatingChange
    ];
    return questions.sort((a, b) => a.order - b.order);

  }

  getDemoset1() {

    let demoset1: ItemBase<any>[] = [
      // textbox
      new TextboxItem({
        key: 'id',
        label: 'Id',
        placeholder: "A string here",
        help: "The id attribute of the component",
        type: 'text'
      }),
      // checkbox
      new CheckboxItem({
        key: 'showHalfStars',
        label: 'showHalfStars',
        value: 5,
      }),
      // select
      new SelectQuestion({
        key: 'size',
        label: 'Stars size',
        options: [
          {key: 'small', value: 'Small'},
          {key: 'medium', value: 'Medium'},
          {key: 'large', value: 'Large'}
        ]
      }),
      // multiselect
      new MultiselectQuestion({
        key: 'staticColor',

        label: 'Static color of the stars',
        options: [
          {key: 'default', value: 'Default'},
          {key: 'bad', value: 'Bad'},
          {key: 'ok', value: 'Ok'},
          {key: 'good', value: 'Good'}
        ]
      }),
      //radio
      new RadioItem({
        key: 'showHalfStars',
        label: 'Show half stars',
        options: [
          {key: 'yes', value: 'Yes'},
          {key: 'no', value: 'No'},
        ],
      }),
      //button
      new ButtonItem({
        key: 'submit-button',
        label: 'Reset',
        type: 'reset'
      })
    ];
    return demoset1;

  }
}
