import {Component} from "@angular/core";
import {IStarRatingOnClickEvent, IStarRatingOnRatingChangeEven} from "angular-star-rating/dist/src/star-rating-struct";

@Component({
    selector: 'my-events-component',
    template: `    
        
            <star-rating-comp   [starType]="'svg'" 
                                (onClick)="onClick($event)" 
                                (onRatingChange)="onRatingChange($event)">                             
            </star-rating-comp>
            <p>onClickResult: {{onClickResult | json}}</p>
            <p>onRatingChangeResult: {{onRatingChangeResult | json}}</p>
    `
})
export class MyEventsComponent {

    onClickResult:IStarRatingOnClickEvent;
    onRatingChangeResult:IStarRatingOnRatingChangeEven;

    onClick = ($event:IStarRatingOnClickEvent) => {
        console.log('onClick $event: ', $event);
        this.onClickResult = $event;
    };

    onRatingChange = ($event:IStarRatingOnRatingChangeEven) => {
        console.log('onRatingUpdated $event: ', $event);
        this.onRatingChangeResult = $event;
    };

}