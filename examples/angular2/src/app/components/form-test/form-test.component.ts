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

    constructor(private fb: FormBuilder) {

    }

    ngOnInit() {
    }

    onSubmit() {
        console.log('Submit:', this.form.value);
    }

}