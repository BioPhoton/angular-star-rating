import {Injectable}       from '@angular/core';
import {ItemBase}     from '../../common/dynamic-form/item/item-base';
import {SelectItem} from '../../common/dynamic-form/item/item-select';
import {TextboxItem}  from '../../common/dynamic-form/item/item-textbox';
import {RadioItem} from "../../common/dynamic-form/item/item-radio";
import {CheckboxItem} from "../../common/dynamic-form/item/item-checkbox";
import {MultiselectQuestion} from "../../common/dynamic-form/item/item-multiselect";
import {ButtonItem} from "../../common/dynamic-form/item/item-button";
import {TextareaItem} from "../../common/dynamic-form/item/item-textarea";

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
      new SelectItem({
        key: 'size',
        label: 'Stars size',
        options: [
          {key: 'small', value: 'Small'},
          {key: 'medium', value: 'Medium'},
          {key: 'large', value: 'Large'}
        ]
      }),
      // spread
      new SelectItem({
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
      new SelectItem({
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
      new SelectItem({
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
      new SelectItem({
        key: 'speed',
        label: 'Animation Speed',
        options: [
          {key: 'immediately', value: 'Immediately'},
          {key: 'noticeable', value: 'Noticeable'},
          {key: 'slow', value: 'Slow'}
        ]
      }),
      // direction
      new SelectItem({
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
        key: 'submitButton',
        label: 'Reset',
        type: 'reset'
      })
      // getHalfStarVisible
      // onClick
      // onRatingChange
    ];
    return questions.sort((a, b) => a.order - b.order);

  }

  getKitchenSink() {
    let demoset1: ItemBase<any>[] = [
      // textbox text
      new TextboxItem({
        key: "textboxItem_text",
        label: "Textbox Item of type text",
        type: "text"
      }),
      //textbox email
      new TextboxItem({
        key: "textboxItem_email",
        label: "Textbox Item of type email",
        type: "email"
      }),
      //textbox tel
      new TextboxItem({
        key: "textboxItem_tel",
        label: "Textbox Item of type tel",
        type: "tel"
      }),
      //textbox password
      new TextboxItem({
        key: "textboxItem_password",
        label: "Textbox Item of password",
        type: "password"
      }),
      // textbox number
      new TextboxItem({
        key: "textboxItem_number",
        label: "Textbox Item of type number",
        type: "number"
      }),
      //textbox range
      new TextboxItem({
        key: "textboxItem_range",
        label: "Textbox Item of type range",
        type: "range"
      }),
      //textbox date
      new TextboxItem({
        key: "textboxItem_date",
        label: "Textbox Item of type date",
        type: "date"
      }),
      //textbox time
      new TextboxItem({
        key: "textboxItem_time",
        label: "Textbox Item of type time",
        type: "time"
      }),
      //textbox datetime-local
      new TextboxItem({
        key: "textboxItem_datetime-local",
        label: "Textbox Item of type datetime-local",
        type: "datetime-local"
      }),
      //textbox week
      new TextboxItem({
        key: "textboxItem_week",
        label: "Textbox Item of type week",
        type: "week"
      }),
      //textbox month
      new TextboxItem({
        key: "textboxItem_month",
        label: "Textbox Item of type month",
        type: "month"
      }),
      //textbox url
      new TextboxItem({
        key: "textboxItem_url",
        label: "Textbox Item of type url",
        type: "url"
      }),
      //textbox search
      new TextboxItem({
        key: "textboxItem_search",
        label: "Textbox Item of type search",
        type: "search"
      }),
      //textbox hidden
      new TextboxItem({
        key: "textboxItem_hidden",
        label: "Textbox Item of type hidden",
        type: "hidden"
      }),
      // checkbox
      new CheckboxItem({
        key: 'checkboxItem',
        label: 'Checkbox item',
      }),
      //radio
      new RadioItem({
        key: 'radioItem',
        label: 'Radio item',
        options: [
          {key: 'key0', value: 'Short label'},
          {key: 'key1', value: 'Label should always fit'},
          {key: 'key2', value: 'Kind a long label for a radio control'},
          {key: 'key3', value: 'This label is really long for a normal radio control!'},
        ],
      }),
      // select
      new SelectItem({
        key: 'selectItem',
        label: 'Select item',
        options: [
          {key: 'key0', value: 'Short label'},
          {key: 'key1', value: 'Label should always fit'},
          {key: 'key2', value: 'Kind a long label for a select box'},
          {key: 'key3', value: 'This label is really long for a normal select box!'},
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
      // textarea
      new TextareaItem({
        key: 'textareaItem',
        label: 'Textarea Item'
      }),
      //button
      new ButtonItem({
        key: 'buttonReset',
        label: 'Reset',
        type: 'reset'
      }),
      //button
      new ButtonItem({
        key: 'buttonSubmit',
        label: 'Submit',
        type: 'submit'
      }),
      //button
      new ButtonItem({
        key: 'buttonButton',
        label: 'Button',
        type: 'button'
      })
    ];
    return demoset1;
  }

  getGenericElement() {

    let genericElementConfig: ItemBase<any>[] = [
      // controlTzpe
      new SelectItem({
        key: 'controlType',
        label: 'Control Type',
        help: "This value is used to identify the control type  of the element",
        options: [
          {key: 'textbox', value: 'Textbox'},
          {key: 'select', value: 'Select'},
          {key: 'multiselect', value: 'Multiselect'},
          {key: 'checkbox', value: 'Checkbox'},
          {key: 'checkboxInline', value: 'Checkbox Inline'},
          {key: 'radioInline', value: 'Radio Inline'},
          {key: 'textarea', value: 'Textarea'},
          {key: 'sumbit', value: 'Submit'},
          {key: 'reset', value: 'Reset'},
          {key: 'button', value: 'Button'}
        ],
      }),
      // type
      new SelectItem({
        key: 'type',
        label: 'type',
        help: "This value is used in the type attribute of the element",
        type: 'text',
        options: [
          {key: 'text', value: 'text'},
          {key: 'number', value: 'number'},
          {key: 'select', value: 'Select'},
          {key: 'checkbox', value: 'Checkbox'},
          {key: 'radio', value: 'Radio'},
          {key: 'textarea', value: 'Textarea'},
          {key: 'sumbit', value: 'Submit'},
          {key: 'reset', value: 'Reset'},
          {key: 'button', value: 'Button'}
        ],
      }),
      //key
      new TextboxItem({
        key: "key",
        label: "Key",
        placeholder: "The element key",
        //help: "This value is used in the id and name attribute of the element",
        type: "text"
      }),
      // label
      new TextboxItem({
        key: 'label',
        label: 'Label',
        placeholder: "The element label",
        help: "This value is used in the lable of the element",
        type: 'text'
      }),
      // placeholder
      new TextboxItem({
        key: 'placeholder',
        label: 'Placeholder',
        placeholder: "The element placeholder",
        help: "This value is used in the placeholder of the element",
        type: 'text'
      }),
      // help
      new TextboxItem({
        key: 'help',
        label: 'Help',
        placeholder: "The element help",
        help: "This value is used in the help of the element",
        type: 'text'
      }),
      //button
      new ButtonItem({
        key: 'submit-button',
        label: 'Update',
        type: 'submit'
      })
      /**/
    ];
    return genericElementConfig;
  }

}
