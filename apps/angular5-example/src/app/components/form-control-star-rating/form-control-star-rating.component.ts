import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-test',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Form Control</h1>
          <form [formGroup]="form" (submit)="onSubmit()">
            <star-rating-comp
              [labelText]="'Rating as form control'"
              [rating]="rating"
              formControlName="ratingInput"></star-rating-comp>

            <div class="stock-inventory__buttons">
              <button
                type="submit"
                [disabled]="form.invalid">
                Submit
              </button>
            </div>
            <pre>{{ form.value | json }}</pre>
          </form>
        </div>
      </div>
    </div>
  `
})
export class FormControlStarRatingComponent {
  form = new FormGroup({
    ratingInput: new FormControl('')
  });

  rating = 0;

  constructor(private fb: FormBuilder) {
    setTimeout(() => {
      this.rating = 2.7;
    }, 5000);
  }

  onSubmit() {
    console.log('Submitted value:', this.form.value);
  }
}
