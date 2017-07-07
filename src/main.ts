import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { StarRatingModule } from './index';

enableProdMode();

platformBrowserDynamic().bootstrapModule(StarRatingModule);
