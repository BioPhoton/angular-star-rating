import {Component, Input, OnChanges, Output, EventEmitter} from "@angular/core";
import {
    starRatingSizes,
    starRatingSpeed,
    starRatingColors,
    starRatingPosition,
    starRatingStarSpace,
    starRatingStarTypes,
    IStarRatingOnClickEvent,
    IStarRatingOnRatingChangeEven
} from "./star-rating-struct";
import {StarRatingConfig} from "./star-rating-config";

@Component({
    selector: 'star-rating-comp',
    //templateUrl: 'star-rating.component.html',
    template: `
        <div id="{{id}}"
     class="rating {{rating?'value-'+ratingAsInteger:'value-0'}} {{readOnly?'read-only':''}} {{disabled?'disabled':''}} {{halfStarVisible?'half':''}} {{space?'space-'+space:''}} {{labelVisible?'label-'+labelVisible:''}} {{labelPosition?'label-'+labelPosition:''}} {{color?'color-'+color:''}} {{starType?'star-'+starType:''}} {{speed}} {{size}}"
    >
                <div *ngIf="text" class="label-value">{{text}}</div>
                <div class="star-container">
                    <div class="star"
                    *ngFor="let star of stars"
                    (click)="onStarClicked(star)">
                        <i class="star-empty {{classEmpty}}"></i>
                        <i class="star-empty {{classHalf}}"></i>
                        <i class="star-filled {{classFilled}}"></i>
                        <svg class="star-empty {{classEmpty}}">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{pathEmpty}}"></use>
                        </svg>
                        <svg class="star-half {{classHalf}}">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{pathHalf}}"></use>
                        </svg>
                        <svg class="star-filled {{classFilled}}">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{pathFilled}}"></use>
                        </svg>
                    </div>
            </div>
        </div>
    `,
    styles: [`
   .center-all,.star{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.star{position:relative;width:20px;height:20px}.star i,.star svg{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%;font-style:normal}.star i.star-filled,.star i.star-half,.star svg.star-filled,.star svg.star-half{opacity:0}.star i{top:1px;display:none}.rating.star-icon i,.star.icon i{font-size:25px;line-height:25px}.rating.star-icon i.star-empty:before,.star.icon i.star-empty:before{content:"☆"}.rating.star-icon i.star-filled:before,.rating.star-icon i.star-half:before,.star.icon i.star-filled:before,.star.icon i.star-half:before{content:"★"}.rating.star-custom-icon i,.rating.theme-kununu .star-container .star i,.star.custom-icon i{font-size:18px;line-height:18px}.star.empty i.star-filled,.star.empty i.star-half,.star.empty svg.star-filled,.star.empty svg.star-half{opacity:0}.star.empty i.star-empty,.star.empty svg.star-empty{opacity:1}.rating.value-0.half .star:nth-child(1) i.star-empty,.rating.value-0.half .star:nth-child(1) i.star-filled,.rating.value-0.half .star:nth-child(1) svg.star-empty,.rating.value-0.half .star:nth-child(1) svg.star-filled,.rating.value-1.half .star-container .star:nth-child(2) i.star-empty,.rating.value-1.half .star-container .star:nth-child(2) i.star-filled,.rating.value-1.half .star-container .star:nth-child(2) svg.star-empty,.rating.value-1.half .star-container .star:nth-child(2) svg.star-filled,.rating.value-2.half .star-container .star:nth-child(3) i.star-empty,.rating.value-2.half .star-container .star:nth-child(3) i.star-filled,.rating.value-2.half .star-container .star:nth-child(3) svg.star-empty,.rating.value-2.half .star-container .star:nth-child(3) svg.star-filled,.rating.value-3.half .star-container .star:nth-child(4) i.star-empty,.rating.value-3.half .star-container .star:nth-child(4) i.star-filled,.rating.value-3.half .star-container .star:nth-child(4) svg.star-empty,.rating.value-3.half .star-container .star:nth-child(4) svg.star-filled,.rating.value-4.half .star-container .star:nth-child(5) i.star-empty,.rating.value-4.half .star-container .star:nth-child(5) i.star-filled,.rating.value-4.half .star-container .star:nth-child(5) svg.star-empty,.rating.value-4.half .star-container .star:nth-child(5) svg.star-filled,.rating.value-5.half .star-container .star:nth-child(6) i.star-empty,.rating.value-5.half .star-container .star:nth-child(6) i.star-filled,.rating.value-5.half .star-container .star:nth-child(6) svg.star-empty,.rating.value-5.half .star-container .star:nth-child(6) svg.star-filled,.star.half i.star-empty,.star.half i.star-filled,.star.half svg.star-empty,.star.half svg.star-filled{opacity:0}.rating.value-0.half .star:nth-child(1) i.star-half,.rating.value-0.half .star:nth-child(1) svg.star-half,.rating.value-1.half .star-container .star:nth-child(2) i.star-half,.rating.value-1.half .star-container .star:nth-child(2) svg.star-half,.rating.value-2.half .star-container .star:nth-child(3) i.star-half,.rating.value-2.half .star-container .star:nth-child(3) svg.star-half,.rating.value-3.half .star-container .star:nth-child(4) i.star-half,.rating.value-3.half .star-container .star:nth-child(4) svg.star-half,.rating.value-4.half .star-container .star:nth-child(5) i.star-half,.rating.value-4.half .star-container .star:nth-child(5) svg.star-half,.rating.value-5.half .star-container .star:nth-child(6) i.star-half,.rating.value-5.half .star-container .star:nth-child(6) svg.star-half,.star.half i.star-half,.star.half svg.star-half{opacity:1}.rating.value-1 .star-container .star:nth-child(-n+1) i.star-empty,.rating.value-1 .star-container .star:nth-child(-n+1) i.star-filled,.rating.value-1 .star-container .star:nth-child(-n+1) svg.star-empty,.rating.value-1 .star-container .star:nth-child(-n+1) svg.star-filled,.rating.value-2 .star-container .star:nth-child(-n+2) i.star-empty,.rating.value-2 .star-container .star:nth-child(-n+2) i.star-filled,.rating.value-2 .star-container .star:nth-child(-n+2) svg.star-empty,.rating.value-2 .star-container .star:nth-child(-n+2) svg.star-filled,.rating.value-3 .star-container .star:nth-child(-n+3) i.star-empty,.rating.value-3 .star-container .star:nth-child(-n+3) i.star-filled,.rating.value-3 .star-container .star:nth-child(-n+3) svg.star-empty,.rating.value-3 .star-container .star:nth-child(-n+3) svg.star-filled,.rating.value-4 .star-container .star:nth-child(-n+4) i.star-empty,.rating.value-4 .star-container .star:nth-child(-n+4) i.star-filled,.rating.value-4 .star-container .star:nth-child(-n+4) svg.star-empty,.rating.value-4 .star-container .star:nth-child(-n+4) svg.star-filled,.rating.value-5 .star-container .star:nth-child(-n+5) i.star-empty,.rating.value-5 .star-container .star:nth-child(-n+5) i.star-filled,.rating.value-5 .star-container .star:nth-child(-n+5) svg.star-empty,.rating.value-5 .star-container .star:nth-child(-n+5) svg.star-filled,.rating.value-6 .star-container .star:nth-child(-n+6) i.star-empty,.rating.value-6 .star-container .star:nth-child(-n+6) i.star-filled,.rating.value-6 .star-container .star:nth-child(-n+6) svg.star-empty,.rating.value-6 .star-container .star:nth-child(-n+6) svg.star-filled,.rating.value-7 .star-container .star:nth-child(-n+7) i.star-empty,.rating.value-7 .star-container .star:nth-child(-n+7) i.star-filled,.rating.value-7 .star-container .star:nth-child(-n+7) svg.star-empty,.rating.value-7 .star-container .star:nth-child(-n+7) svg.star-filled,.rating.value-8 .star-container .star:nth-child(-n+8) i.star-empty,.rating.value-8 .star-container .star:nth-child(-n+8) i.star-filled,.rating.value-8 .star-container .star:nth-child(-n+8) svg.star-empty,.rating.value-8 .star-container .star:nth-child(-n+8) svg.star-filled,.rating.value-9 .star-container .star:nth-child(-n+9) i.star-empty,.rating.value-9 .star-container .star:nth-child(-n+9) i.star-filled,.rating.value-9 .star-container .star:nth-child(-n+9) svg.star-empty,.rating.value-9 .star-container .star:nth-child(-n+9) svg.star-filled,.rating.value-10 .star-container .star:nth-child(-n+10) i.star-empty,.rating.value-10 .star-container .star:nth-child(-n+10) i.star-filled,.rating.value-10 .star-container .star:nth-child(-n+10) svg.star-empty,.rating.value-10 .star-container .star:nth-child(-n+10) svg.star-filled,.rating.value-11 .star-container .star:nth-child(-n+11) i.star-empty,.rating.value-11 .star-container .star:nth-child(-n+11) i.star-filled,.rating.value-11 .star-container .star:nth-child(-n+11) svg.star-empty,.rating.value-11 .star-container .star:nth-child(-n+11) svg.star-filled,.rating.value-12 .star-container .star:nth-child(-n+12) i.star-empty,.rating.value-12 .star-container .star:nth-child(-n+12) i.star-filled,.rating.value-12 .star-container .star:nth-child(-n+12) svg.star-empty,.rating.value-12 .star-container .star:nth-child(-n+12) svg.star-filled,.star.filled i.star-empty,.star.filled i.star-filled,.star.filled svg.star-empty,.star.filled svg.star-filled{opacity:0}.rating.value-1 .star-container .star:nth-child(-n+1) i.star-filled,.rating.value-1 .star-container .star:nth-child(-n+1) svg.star-filled,.rating.value-2 .star-container .star:nth-child(-n+2) i.star-filled,.rating.value-2 .star-container .star:nth-child(-n+2) svg.star-filled,.rating.value-3 .star-container .star:nth-child(-n+3) i.star-filled,.rating.value-3 .star-container .star:nth-child(-n+3) svg.star-filled,.rating.value-4 .star-container .star:nth-child(-n+4) i.star-filled,.rating.value-4 .star-container .star:nth-child(-n+4) svg.star-filled,.rating.value-5 .star-container .star:nth-child(-n+5) i.star-filled,.rating.value-5 .star-container .star:nth-child(-n+5) svg.star-filled,.rating.value-6 .star-container .star:nth-child(-n+6) i.star-filled,.rating.value-6 .star-container .star:nth-child(-n+6) svg.star-filled,.rating.value-7 .star-container .star:nth-child(-n+7) i.star-filled,.rating.value-7 .star-container .star:nth-child(-n+7) svg.star-filled,.rating.value-8 .star-container .star:nth-child(-n+8) i.star-filled,.rating.value-8 .star-container .star:nth-child(-n+8) svg.star-filled,.rating.value-9 .star-container .star:nth-child(-n+9) i.star-filled,.rating.value-9 .star-container .star:nth-child(-n+9) svg.star-filled,.rating.value-10 .star-container .star:nth-child(-n+10) i.star-filled,.rating.value-10 .star-container .star:nth-child(-n+10) svg.star-filled,.rating.value-11 .star-container .star:nth-child(-n+11) i.star-filled,.rating.value-11 .star-container .star:nth-child(-n+11) svg.star-filled,.rating.value-12 .star-container .star:nth-child(-n+12) i.star-filled,.rating.value-12 .star-container .star:nth-child(-n+12) svg.star-filled,.star.filled i.star-filled,.star.filled svg.star-filled{opacity:1}.star-container .star svg,.star.default svg{fill:#999}.star-container .star i,.star.default i{color:#999}.rating.value-0.half .star svg,.rating.value-1 .star-container .star svg,.rating.value-1.half .star-container .rating.value-0.star:nth-child(2) .star svg,.rating.value-2 .star-container .star svg,.rating.value-2.half .star-container .rating.value-0.star:nth-child(3) .star svg,.rating.value-3.half .star-container .rating.value-0.star:nth-child(4) .star svg,.rating.value-4.half .star-container .rating.value-0.star:nth-child(5) .star svg,.rating.value-5.half .star-container .rating.value-0.star:nth-child(6) .star svg,.star.negative svg{fill:#f03c56}.rating.value-0.half .star i,.rating.value-1 .star-container .star i,.rating.value-1.half .star-container .rating.value-0.star:nth-child(2) .star i,.rating.value-2 .star-container .star i,.rating.value-2.half .star-container .rating.value-0.star:nth-child(3) .star i,.rating.value-3.half .star-container .rating.value-0.star:nth-child(4) .star i,.rating.value-4.half .star-container .rating.value-0.star:nth-child(5) .star i,.rating.value-5.half .star-container .rating.value-0.star:nth-child(6) .star i,.star.negative i{color:#f03c56}.rating.value-3 .star-container .star svg,.star.middle svg{fill:#ffc058}.rating.value-3 .star-container .star i,.star.middle i{color:#ffc058}.rating.value-4 .star-container .star svg,.rating.value-5 .star-container .star svg,.rating.value-6 .star-container .star svg,.rating.value-7 .star-container .star svg,.rating.value-8 .star-container .star svg,.rating.value-9 .star-container .star svg,.rating.value-10 .star-container .star svg,.rating.value-11 .star-container .star svg,.rating.value-12 .star-container .star svg,.star.positive svg{fill:#7ed321}.rating.value-4 .star-container .star i,.rating.value-5 .star-container .star i,.rating.value-6 .star-container .star i,.rating.value-7 .star-container .star i,.rating.value-8 .star-container .star i,.rating.value-9 .star-container .star i,.rating.value-10 .star-container .star i,.rating.value-11 .star-container .star i,.rating.value-12 .star-container .star i,.star.positive i{color:#7ed321}.rating.star-svg i,.star.svg i{display:none}.rating.star-svg svg,.star.svg svg{display:-webkit-box;display:-ms-flexbox;display:flex}.rating.star-custom-icon svg,.rating.star-icon svg,.rating.theme-kununu .star-container .star svg,.star.custom-icon svg,.star.icon svg{display:none}.rating.star-custom-icon i,.rating.star-icon i,.rating.theme-kununu .star-container .star i,.star.custom-icon i,.star.icon i{display:-webkit-box;display:-ms-flexbox;display:flex}.rating.small .star,.star.small{width:10px;height:9,5px}.rating.small .star i,.star.small i{font-size:11px;line-height:10px}.rating.medium .star,.star.medium{width:20px;height:20px}.rating.medium .star i,.star.medium i{font-size:25px;line-height:25px}.rating.large .star,.star.large{width:35px;height:33.3px}.rating.large .star i,.star.large i{font-size:36px;line-height:35px}.rating.disabled .star-container .star,.star.disabled{opacity:.5}.rating.direction-rtl .star-container .star i.star-half,.rating.direction-rtl .star-container .star svg.star-half,.star-container.direction-rtl .star i.star-half,.star-container.direction-rtl .star svg.star-half,.star.direction-rtl i.star-half,.star.direction-rtl svg.star-half{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.star-container.direction-ltr .star i.star-half,.star-container.direction-ltr .star svg.star-half,.star.direction-ltr i.star-half,.star.direction-ltr svg.star-half{-webkit-transform:scale(1);transform:scale(1)}.label-value{font-size:18px;line-height:18px}.label-value.small,.rating.small .label-value{font-size:9.5px;line-height:9.5px}.label-value.medium,.rating.medium .label-value{font-size:18px;line-height:25px}.label-value.large,.rating.large .label-value{font-size:28px;line-height:35px}.label-value.disabled,.rating.disabled .label-value{opacity:.5}.star-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:5px;margin-right:5px;-webkit-transition:all .3s ease;transition:all .3s ease}.star-container+.star{margin-left:5px}.star-container .star,.star-container .star i,.star-container .star svg{-webkit-transition:all .3s ease;transition:all .3s ease}.star-container svg{z-index:2}.star-container i{z-index:1}.rating.direction-rtl .star-container,.star-container.direction-rtl{direction:rtl}.star-container.direction-ltr{direction:ltr}.rating.space-no .star-container,.star-container.space-no{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.rating.space-between .star-container,.star-container.space-between{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.rating.space-around .star-container,.star-container.space-around{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-pack:distribute;justify-content:space-around}.rating{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:5px}.rating.label-hidden .label-value{display:none}.rating.label-visible{display:-webkit-box;display:-ms-flexbox;display:flex}.rating.label-top{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.rating.label-top .label-value+.star-container{margin-left:0;margin-right:0;margin-top:5px}.rating.label-left .label-value{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.rating.label-left .label-value+.star-container{margin-left:5px;margin-right:0}.rating.label-right{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.rating.label-right .label-value+.star-container{margin-left:0;margin-right:5px}.rating.label-bottom{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.rating.label-bottom .label-value+.star-container{margin-left:0;margin-right:0;margin-bottom:5px}.rating.direction-rtl{direction:rtl}.rating.direction-ltr{direction:ltr}.rating.color-default .star-container .star svg{fill:#999}.rating.color-default .star-container .star i{color:#999}.rating.color-ok .star-container .star svg{fill:#ffc058}.rating.color-ok .star-container .star i{color:#ffc058}.rating.color-positive .star-container .star svg{fill:#7ed321}.rating.color-positive .star-container .star i{color:#7ed321}.rating.color-negative .star-container .star svg{fill:#f03c56}.rating.color-negative .star-container .star i{color:#f03c56}.rating.immediately .star-container{-webkit-transition:all none;transition:all none}.rating.immediately .star-container .star,.rating.immediately .star-container .star i,.rating.immediately .star-container .star svg{-webkit-transition:none;transition:none}.rating.noticeable .star-container,.rating.noticeable .star-container .star,.rating.noticeable .star-container .star i,.rating.noticeable .star-container .star svg{-webkit-transition:all .3s ease;transition:all .3s ease}.rating.slow .star-container,.rating.slow .star-container .star,.rating.slow .star-container .star i,.rating.slow .star-container .star svg{-webkit-transition:all .8s ease;transition:all .8s ease}.rating.theme-kununu{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:78px}.rating.theme-kununu .label-value,.rating.theme-kununu .star-container{width:100%}.rating.theme-kununu .label-value{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:6px 6px 0 0;height:50px;border:1px solid #e9ecec;border-bottom:0;font-size:18px;font-weight:700;color:#2f3940;letter-spacing:-1px;background-color:#f8f8f8}.rating.theme-kununu .star-container{border-radius:0 0 6px 6px;padding:2px 0 4px;margin-left:0;margin-right:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:#99c613;border:1px solid #99c613;border-bottom:0}.rating.theme-kununu .star-container .star{height:11px;width:11px}.rating.theme-kununu .star-container .star i{font-size:11px;color:#fff;text-align:center}.rating.theme-google-places .label-value{color:#e7711b;font-family:arial,sans-serif;font-size:13px;line-height:15px}.rating.theme-google-places .star-container{width:65px;margin-left:2px}.rating.theme-google-places .star-container .star i{font-size:17px;color:#e7711b!important}.rating.theme-google-places .star-container .star i.star-empty{opacity:1!important;color:#e1e1e1!important}.rating.theme-google-places .star-container .star i.star-empty:before{content:"★"}.rating.theme-google-places .star-container .star i.star-half{width:7px;overflow:hidden}.rating.theme-google-places .star-container .star i.star-filled:before,.rating.theme-google-places .star-container .star i.star-half:before{content:"★"}.rating.theme-rolling-stars .star-container .star{-webkit-transition:-webkit-transform 1s;transition:-webkit-transform 1s;transition:transform 1s;transition:transform 1s,-webkit-transform 1s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.rating.theme-rolling-stars.value-0.half .star:nth-child(1),.rating.theme-rolling-stars.value-1 .star-container .star:nth-child(-n+1),.rating.theme-rolling-stars.value-1.half .star-container .star:nth-child(2),.rating.theme-rolling-stars.value-2 .star-container .star:nth-child(-n+2),.rating.theme-rolling-stars.value-2.half .star-container .star:nth-child(3),.rating.theme-rolling-stars.value-3 .star-container .star:nth-child(-n+3),.rating.theme-rolling-stars.value-3.half .star-container .star:nth-child(4),.rating.theme-rolling-stars.value-4 .star-container .star:nth-child(-n+4),.rating.theme-rolling-stars.value-4.half .star-container .star:nth-child(5),.rating.theme-rolling-stars.value-5 .star-container .star:nth-child(-n+5),.rating.theme-rolling-stars.value-5.half .star-container .star:nth-child(6),.rating.theme-rolling-stars.value-6 .star-container .star:nth-child(-n+6),.rating.value-0.half .rating.theme-rolling-stars.value-0.star:nth-child(1) .star:nth-child(1),.rating.value-0.half .rating.theme-rolling-stars.value-1.star:nth-child(1) .star-container .star:nth-child(2),.rating.value-0.half .rating.theme-rolling-stars.value-2.star:nth-child(1) .star-container .star:nth-child(3),.rating.value-0.half .rating.theme-rolling-stars.value-3.star:nth-child(1) .star-container .star:nth-child(4),.rating.value-0.half .rating.theme-rolling-stars.value-4.star:nth-child(1) .star-container .star:nth-child(5),.rating.value-0.half .rating.theme-rolling-stars.value-5.star:nth-child(1) .star-container .star:nth-child(6),.rating.value-1.half .star-container .rating.theme-rolling-stars.value-0.star:nth-child(2) .star:nth-child(1),.rating.value-1.half .star-container .rating.theme-rolling-stars.value-1.star:nth-child(2) .star-container .star:nth-child(2),.rating.value-1.half .star-container .rating.theme-rolling-stars.value-2.star:nth-child(2) .star-container .star:nth-child(3),.rating.value-1.half .star-container .rating.theme-rolling-stars.value-3.star:nth-child(2) .star-container .star:nth-child(4),.rating.value-1.half .star-container .rating.theme-rolling-stars.value-4.star:nth-child(2) .star-container .star:nth-child(5),.rating.value-1.half .star-container .rating.theme-rolling-stars.value-5.star:nth-child(2) .star-container .star:nth-child(6),.rating.value-2.half .star-container .rating.theme-rolling-stars.value-0.star:nth-child(3) .star:nth-child(1),.rating.value-2.half .star-container .rating.theme-rolling-stars.value-1.star:nth-child(3) .star-container .star:nth-child(2),.rating.value-2.half .star-container .rating.theme-rolling-stars.value-2.star:nth-child(3) .star-container .star:nth-child(3),.rating.value-2.half .star-container .rating.theme-rolling-stars.value-3.star:nth-child(3) .star-container .star:nth-child(4),.rating.value-2.half .star-container .rating.theme-rolling-stars.value-4.star:nth-child(3) .star-container .star:nth-child(5),.rating.value-2.half .star-container .rating.theme-rolling-stars.value-5.star:nth-child(3) .star-container .star:nth-child(6),.rating.value-3.half .star-container .rating.theme-rolling-stars.value-0.star:nth-child(4) .star:nth-child(1),.rating.value-3.half .star-container .rating.theme-rolling-stars.value-1.star:nth-child(4) .star-container .star:nth-child(2),.rating.value-3.half .star-container .rating.theme-rolling-stars.value-2.star:nth-child(4) .star-container .star:nth-child(3),.rating.value-3.half .star-container .rating.theme-rolling-stars.value-3.star:nth-child(4) .star-container .star:nth-child(4),.rating.value-3.half .star-container .rating.theme-rolling-stars.value-4.star:nth-child(4) .star-container .star:nth-child(5),.rating.value-3.half .star-container .rating.theme-rolling-stars.value-5.star:nth-child(4) .star-container .star:nth-child(6),.rating.value-4.half .star-container .rating.theme-rolling-stars.value-0.star:nth-child(5) .star:nth-child(1),.rating.value-4.half .star-container .rating.theme-rolling-stars.value-1.star:nth-child(5) .star-container .star:nth-child(2),.rating.value-4.half .star-container .rating.theme-rolling-stars.value-2.star:nth-child(5) .star-container .star:nth-child(3),.rating.value-4.half .star-container .rating.theme-rolling-stars.value-3.star:nth-child(5) .star-container .star:nth-child(4),.rating.value-4.half .star-container .rating.theme-rolling-stars.value-4.star:nth-child(5) .star-container .star:nth-child(5),.rating.value-4.half .star-container .rating.theme-rolling-stars.value-5.star:nth-child(5) .star-container .star:nth-child(6),.rating.value-5.half .star-container .rating.theme-rolling-stars.value-0.star:nth-child(6) .star:nth-child(1),.rating.value-5.half .star-container .rating.theme-rolling-stars.value-1.star:nth-child(6) .star-container .star:nth-child(2),.rating.value-5.half .star-container .rating.theme-rolling-stars.value-2.star:nth-child(6) .star-container .star:nth-child(3),.rating.value-5.half .star-container .rating.theme-rolling-stars.value-3.star:nth-child(6) .star-container .star:nth-child(4),.rating.value-5.half .star-container .rating.theme-rolling-stars.value-4.star:nth-child(6) .star-container .star:nth-child(5),.rating.value-5.half .star-container .rating.theme-rolling-stars.value-5.star:nth-child(6) .star-container .star:nth-child(6){-webkit-transition:-webkit-transform 1s;transition:-webkit-transform 1s;transition:transform 1s;transition:transform 1s,-webkit-transform 1s;-webkit-transform:rotate(1turn);transform:rotate(1turn)}
  `],
})
export class StarRatingComponent implements OnChanges {

    //Static methods
    ///////////////////////////////////////////////////////////////////////////////////////////

    /**
     * _getStarsArray
     *
     * returns an array of increasing numbers starting at 1
     *
     * @param numOfStars
     * @returns {Array}
     */
    static _getStarsArray(numOfStars: number): Array<number> {
        let stars: Array<number> = [];
        for (let i = 0; i < numOfStars; i++) {
            stars.push(i + 1);
        }
        return stars;
    }

    /**
     * _getHalfStarVisible
     *
     * Returns true if there should be a half star visible, and false if not.
     *
     * @param rating
     * @returns {boolean}
     */
    static _getHalfStarVisible(rating: number): boolean {
        return Math.abs(rating % 1) > 0;
    }

    /**
     * _getColor
     *
     * The default function for color calculation
     * based on the current rating and the the number of stars possible.
     * If a staticColor is set the function will use it as return value.
     *
     * @param rating
     * @param numOfStars
     * @param staticColor
     * @returns {starRatingColors}
     */
    static _getColor(rating: number, numOfStars: number, staticColor?: starRatingColors): starRatingColors {
        rating = rating || 0;

        //if a fix color is set use this one
        if (staticColor) {
            return staticColor;
        }

        //calculate size of smallest fraction
        let fractionSize = numOfStars / 3;

        //apply color by fraction
        let color: starRatingColors = 'default';
        if (rating > 0) {
            color = 'negative';
        }
        if (rating > fractionSize) {
            color = 'ok';
        }
        if (rating > fractionSize * 2) {
            color = 'positive';
        }

        return color;
    }

    protected config:any;

    //Inputs
    ///////////////////////////////////////////////////////////////////////////////////////////

    /**
     * id property to identify the DOM element
     */
    protected _id: string;
    get id(): string {
        return this._id;
    }

    @Input()
    set id(value: string) {
        this._id = value || '';
    }

    /////////////////////////////////////////////

    /**
     * labelText
     */
    protected _labelText: string;
    get labelText(): string {
        return this._labelText;
    }

    @Input()
    set labelText(value: string) {
        this._labelText = value;
    }

    /////////////////////////////////////////////

    /**
     * labelPosition
     */
    protected _labelPosition: starRatingPosition;
    get labelPosition(): starRatingPosition {
        return this._labelPosition;
    }

    @Input()
    set labelPosition(value: starRatingPosition) {
        this._labelPosition = value || this.config.labelPosition;
    }

    /////////////////////////////////////////////

    /**
     * staticColor
     */
    protected _staticColor: starRatingColors;

    get staticColor(): starRatingColors {
        return this._staticColor;
    }

    @Input()
    set staticColor(value: starRatingColors) {
        this._staticColor = value || undefined;

        //update color.
        this.setColor();
    }

    /////////////////////////////////////////////

    /**
     * numOfStars
     */
    protected _numOfStars: number;

    get numOfStars(): number {
        return this._numOfStars;
    }

    @Input()
    set numOfStars(value: number) {
        this._numOfStars = (value > 0) ? value : this.config.numOfStars;

        //update stars array
        this.stars = StarRatingComponent._getStarsArray(this.numOfStars);

        //update color
        this.setColor();
    }

    /////////////////////////////////////////////

    /**
     * speed
     */
    protected _speed: starRatingSpeed;

    get speed(): starRatingSpeed {
        return this._speed;
    }

    @Input()
    set speed(value: starRatingSpeed) {
        this._speed = value || this.config.speed;
    }

    /////////////////////////////////////////////

    /**
     * size
     */
    protected _size: starRatingSizes;

    get size(): starRatingSizes {
        return this._size;
    }

    @Input()
    set size(value: starRatingSizes) {
        this._size = value || this.config.size;
    }

    /////////////////////////////////////////////

    /**
     * starType
     */
    protected _starType: starRatingStarTypes;

    get starType(): starRatingStarTypes {
        return this._starType;
    }

    @Input()
    set starType(value: starRatingStarTypes) {
        this._starType = value || this.config.starType;
    }

    /////////////////////////////////////////////

    /**
     * space
     */
    protected _space: starRatingStarSpace;

    get space(): starRatingStarSpace {
        return this._space;
    }

    @Input()
    set space(value: starRatingStarSpace) {
        this._space = value;
    }

    /////////////////////////////////////////////

    /**
     * readOnly
     */
    protected _readOnly: boolean;

    get readOnly(): boolean {
        return this._readOnly;
    }

    @Input()
    set readOnly(value: boolean) {
        this._readOnly = !!value;
    }

    /////////////////////////////////////////////

    /**
     * disabled
     */
    protected _disabled: boolean;

    get disabled(): boolean {
        return this._disabled;
    }

    @Input()
    set disabled(value: boolean) {
        this._disabled = !!value;
    }

    /////////////////////////////////////////////

    /**
     * rating
     */
    protected _rating: number;

    get rating(): number {
        return this._rating;
    }

    @Input()
    set rating(value: number) {
        //validate and apply newRating
        let newRating: number = 0;
        if (value >= 0
            && value <= this.numOfStars) {
            newRating = value;
        }
        //limit max value to max number of stars
        if (value > this.numOfStars) {
            newRating = this.numOfStars;
        }
        this._rating = newRating;

        //update ratingAsInteger. rating parsed to int for the value-[n] modifier
        this.ratingAsInteger = parseInt(this._rating.toString());

        //update halfStarsVisible
        this.setHalfStarVisible();

        //update calculated Color
        this.setColor();


        //fire onRatingChange event
        let $event: IStarRatingOnRatingChangeEven = {rating: this._rating};
        this.onRatingChange.emit($event);
    }


    /**
     * showHalfStars
     */
    protected _showHalfStars: boolean;

    get showHalfStars(): boolean {
        return this._showHalfStars;
    }

    @Input()
    set showHalfStars(value: boolean) {
        this._showHalfStars = !!value;

        //update halfStarVisible
        this.setHalfStarVisible();
    }

    /////////////////////////////////////////////

    /**
     * getColor
     */
    @Input()
    getColor: (rating: number, numOfStars: number, staticColor?: starRatingColors) => starRatingColors;
    /////////////////////////////////////////////

    /**
     * getHalfStarVisible
     */
    @Input()
    getHalfStarVisible: (rating: number) => boolean;
    /////////////////////////////////////////////

    //Output
    ///////////////////////////////////////////////////////////////////////////////////////////
    @Output()
    onClick: EventEmitter<IStarRatingOnClickEvent> = new EventEmitter<IStarRatingOnClickEvent>();

    @Output()
    onRatingChange: EventEmitter<IStarRatingOnRatingChangeEven> = new EventEmitter<IStarRatingOnRatingChangeEven>();

    //CTRL ONLY
    ///////////////////////////////////////////////////////////////////////////////////////////
    classEmpty: string;
    classHalf: string;
    classFilled: string;

    pathEmpty: string;
    pathHalf: string;
    pathFilled: string;

    color: starRatingColors;
    stars: Array<number>;
    ratingAsInteger: number;
    halfStarVisible: boolean;

    constructor() {

        let config = new StarRatingConfig();

        //set default ctrl props
        this.classEmpty = config.classEmpty;
        this.classHalf = config.classHalf;
        this.classFilled = config.classFilled;
        this.pathEmpty = config.svgPathEmpty;
        this.pathHalf = config.svgPathHalf;
        this.pathFilled = config.svgPathFilled;

        //set default Component Inputs
        if ('getColor' in config && typeof config.getColor === "function") {
            this.getColor = config.getColor;
        }

        if ('getHalfStarVisible' in config && typeof config.getHalfStarVisible === "function") {
            this.getHalfStarVisible = config.getHalfStarVisible;
        }

        this.numOfStars = config.numOfStars;
        this.rating = 0;

    }


    setColor(): void {
        //check if custom function is given
        if (typeof this.getColor === "function") {
            this.color = this.getColor(this.rating, this.numOfStars, this.staticColor);
        }
        else {
            this.color = StarRatingComponent._getColor(this.rating, this.numOfStars, this.staticColor);
        }
    }

    setHalfStarVisible(): void {
        //update halfStarVisible
        if (this.showHalfStars) {
            //check if custom function is given
            if (typeof this.getHalfStarVisible === "function") {
                this.halfStarVisible = this.getHalfStarVisible(this.rating);
            } else {
                this.halfStarVisible = StarRatingComponent._getHalfStarVisible(this.rating);
            }

        }
        else {
            this.halfStarVisible = false;
        }
    }

    /**
     * onStarClicked
     *
     * Is fired when a star is clicked. And updated the rating value.
     * This function returns if the disabled or readOnly
     * property is set. If provided it emits the onClick event
     * handler with the actual rating value.
     *
     * @param rating
     */
    protected onStarClicked(rating: number): void {

        //fire onClick event
        let $event: IStarRatingOnClickEvent = {rating: rating};

        if (this.readOnly || this.disabled) {
            return;
        }

        this.rating = rating;

        let onClickEventObject: IStarRatingOnClickEvent = {
            rating: this.rating
        };
        this.onClick.emit(onClickEventObject);

    }

    ngOnChanges(changes: any): void {

        let valueChanged = function (key: string, changes: any): boolean {
            if (key in changes) {
                if (
                    //(changes[key].previousValue != 'UNINITIALIZED_VALUE' && changes[key].currentValue !== undefined)
                changes[key].currentValue != changes[key].previousValue) {
                    return true;
                }
            }
            return false;
        };

        //---------------------------------------

        //functions

        //boolean
        if (valueChanged('showHalfStars', changes)) {
            this.showHalfStars = changes['showHalfStars'].currentValue;
        }

        if (valueChanged('space', changes)) {
            this.space = changes['space'].currentValue;
        }

        if (valueChanged('readOnly', changes)) {
            this.readOnly = changes['readOnly'].currentValue;
        }

        if (valueChanged('disabled', changes)) {
            console.log('valueChanged disabled: ', changes['disabled'].currentValue);
            this.disabled = !!changes['disabled'].currentValue;
        }

        //number
        if (valueChanged('rating', changes)) {
            this.rating = changes['rating'].currentValue;
        }

        if (valueChanged('numOfStars', changes)) {
            this.numOfStars = changes['numOfStars'].currentValue;
        }

        //string
        if (valueChanged('labelText', changes)) {
            this.labelText = changes['labelText'].currentValue;
        }

        if (valueChanged('staticColor', changes)) {
            this.staticColor = changes['staticColor'].currentValue;
        }

        if (valueChanged('size', changes)) {
            this.size = changes['size'].currentValue;
        }

        if (valueChanged('speed', changes)) {
            this.speed = changes['speed'].currentValue;
        }

        if (valueChanged('labelPosition', changes)) {
            this.labelPosition = changes['labelPosition'].currentValue;
        }

        if (valueChanged('starType', changes)) {
            this.starType = changes['starType'].currentValue;
        }

    }

}
