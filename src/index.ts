import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating.component';
import { StarRatingConfig } from './star-rating-config';

export * from './star-rating.component';
export * from './star-rating-config';
export * from './star-rating-struct';

const EXPORTS = [StarRatingComponent];

@NgModule({
    imports: [CommonModule],
    exports: [EXPORTS],
    declarations: [EXPORTS]
})
export class StarRatingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: StarRatingModule,
            providers: [StarRatingConfig]
        }
    }
}
