import { Injectable }       from '@angular/core';
import { ItemBase }     from '../../common/dynamic-form/item/item-base';
import { SelectQuestion } from '../../common/dynamic-form/item/item-select';
import { TextboxQuestion }  from '../../common/dynamic-form/item/item-textbox';
import {RadioItem} from "../../common/dynamic-form/item/item-radio";

@Injectable()
export class ItemService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: ItemBase<any>[] = [
      new SelectQuestion({
        key: 'staticColor',
        label: 'Static color of the stars',
        options: [
          {key: 'default',   value: 'Default'},
          {key: 'bad',  value: 'Bad'},
          {key: 'ok',  value: 'Ok'},
          {key: 'good',   value: 'Good'}
          ],
        order: 3
      }),
      new RadioItem({
        key: 'showHalfStars',
        label: 'Show half stars',
        options: [
          {key: 'yes',   value: 'Yes'},
          {key: 'no',  value: 'No'},
        ],
        order: 4
      }),
      new TextboxQuestion({
        key: 'numOfStars',
        label: 'Number of stars',
        type: 'number',
        value: 5,
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'labelText',
        label: 'Label Txt',
        placeholder:"Show half stars",
        help: "the help text",
        type: 'text',
        order: 2
      })
    ];
    return questions.sort((a, b) => a.order - b.order);

  }
}
