import {Component} from "@angular/core";
import {
  OnClickEvent,
  OnHoverRatingChangeEvent,
  OnRatingChangeEven
} from 'angular-star-rating';

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

    onClickResult:OnClickEvent;
    onHoverRatingChangeResult:OnHoverRatingChangeEvent;
    onRatingChangeResult:OnRatingChangeEven;

    onClick = ($event:OnClickEvent) => {
        console.log('onClick $event: ', $event);
        this.onClickResult = $event;
    };

    onRatingChange = ($event:OnRatingChangeEven) => {
        console.log('onRatingUpdated $event: ', $event);
        this.onRatingChangeResult = $event;
    };

    onHoverRatingChange = ($event:OnHoverRatingChangeEvent) => {
        console.log('onHoverRatingChange $event: ', $event);
        this.onHoverRatingChangeResult = $event;
    };

}