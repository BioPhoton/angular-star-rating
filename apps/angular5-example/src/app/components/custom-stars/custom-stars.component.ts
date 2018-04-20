import {StarRatingConfigService} from '@angular-star-rating-lib/angular-star-rating';
import {Component, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CustomIconsConfigService} from './custom-star-config.service';

@Component({
  selector: 'app-custom-stars',
  templateUrl: './custom-stars.component.html',
  styles: [`
    .star .fas {
      font-size: 17px !important;
    }
  `],
  providers: [
    {
      provide: StarRatingConfigService,
      useClass: CustomIconsConfigService
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class CustomStarsComponent {

  defaultEmpty = 'fa-align-center';
  defaultHalf = 'fa-align-justify';
  defaultFilled = 'fa-align-left';

  form: FormGroup;

  icons: string[] = [
    'fa-500px',
    'fa-accessible-icon',
    'fa-accusoft',
    'fa-address-book',
    'fa-address-card',
    'fa-adjust',
    'fa-adn',
    'fa-adversal',
    'fa-affiliatetheme',
    'fa-algolia',
    'fa-align-center',
    'fa-align-justify',
    'fa-align-left',
    'fa-align-right',
    'fa-allergies',
    'fa-amazon',
    'fa-amazon-pay',
    'fa-ambulance',
    'fa-american-sign-language-interpreting',
    'fa-amilia',
    'fa-anchor',
    'fa-android',
    'fa-angellist',
    'fa-angle-double-down',
    'fa-angle-double-left',
    'fa-angle-double-right',
    'fa-angle-double-up',
    'fa-angle-down'
  ];

  constructor(fb: FormBuilder, sRCS:  StarRatingConfigService) {
    this.form = fb.group({
      rating: [3.5],
      empty:[],
      half:[],
      filled:[]
    });

    this.form.valueChanges
      .subscribe(
        (formValue) => {
          sRCS.classEmpty = formValue.half || this.defaultEmpty;
          sRCS.classHalf = formValue.half || this.defaultHalf;
          sRCS.classFilled = formValue.half || this.defaultFilled;
        }
      )
  }


}
