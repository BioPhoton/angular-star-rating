import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-test',
  templateUrl: 'form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent {

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
    console.log('Submit:', this.form.value);
  }

}