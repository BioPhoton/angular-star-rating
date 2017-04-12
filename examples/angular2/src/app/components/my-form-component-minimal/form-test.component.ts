import {Component} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
    selector: 'my-form-component',
    template: `    
        <form [formGroup]="form">
            <star-rating-comp [starType]="'svg'" formControlName="myRatingControl" ></star-rating-comp>
            <pre>{{ form.value | json }}</pre>
        </form>
    `
})
export class MyFormComponent {

    form = new FormGroup({
        myRatingControl: new FormControl('')
    });

}