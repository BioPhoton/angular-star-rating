import {Component} from "@angular/core";
import {StarRatingConfig} from "angular-star-rating/dist/src/star-rating-config";

export function ConfigFactory(): StarRatingConfig {
    const config = new StarRatingConfig();
    //config.numOfStars = 8;
    console.log(config);
    return config;
}

@Component({
    selector: 'my-config-component',
    template: `
        My Config:<br>
        <star-rating-comp [starType]="'svg'">
        </star-rating-comp>
    `,
    providers: [
        {
            provide: StarRatingConfig,
            useFactory: ConfigFactory,
        }
    ]
})
export class MyConfigComponent {

}