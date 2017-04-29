import {Component} from "@angular/core";
import {IStarRatingOnClickEvent, IStarRatingOnRatingChangeEven} from "angular-star-rating/dist/src/star-rating-struct";
import {IStarRatingOnHoverEvent} from "../../../../../../src/star-rating-struct";

@Component({
    selector: 'my-events-component',
    template: `    
        
            <star-rating-comp   [starType]="'svg'" 
                                [hoverEnabled]="true"
                                (onClick)="onClick($event)" 
                                (onRatingChange)="onRatingChange($event)"
                                (onHoverRatingChange)="onHoverRatingChange($event)">                             
            </star-rating-comp>
            <p>onHoverRatingChangeResult: {{onHoverRatingChangeResult | json}}</p>
            <p>onClickResult: {{onClickResult | json}}</p>
            <p>onRatingChangeResult: {{onRatingChangeResult | json}}</p>
    `
})
export class MyEventsComponent {

    onClickResult:IStarRatingOnClickEvent;
    onHoverRatingChangeResult:IStarRatingOnHoverEvent;
    onRatingChangeResult:IStarRatingOnRatingChangeEven;

    onClick = ($event:IStarRatingOnClickEvent) => {
        console.log('onClick $event: ', $event);
        this.onClickResult = $event;
    };

    onRatingChange = ($event:IStarRatingOnRatingChangeEven) => {
        console.log('onRatingUpdated $event: ', $event);
        this.onRatingChangeResult = $event;
    };

    onHoverRatingChange = ($event:IStarRatingOnHoverEvent) => {
        console.log('onHoverRatingChange $event: ', $event);
        this.onHoverRatingChangeResult = $event;
    };

}