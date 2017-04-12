import {Component, OnInit} from "@angular/core";
import {FormBuilder} from "@angular/forms";

@Component({
    selector: 'app-form-test',

    templateUrl: 'form-test.component.html',
    styleUrls: ['form-test.component.css']
})
export class FormTestComponent implements OnInit {

    form = this.fb.group({
        //test: this.fb.group({
            ratingInput: '',
            ratingComponent: ''
        //})
    });

    rating=0;

    constructor(private fb: FormBuilder) {
        setTimeout(() => {
            this.rating = 2.7;
        }, 5000);
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log('Submit:', this.form.value);
    }

}