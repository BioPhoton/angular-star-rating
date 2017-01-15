import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from "./start.component";

export{ StartComponent} from "./start.component";

const EXPORTS = [ StartComponent ];

@NgModule({
  imports: [ CommonModule],
  exports:      [ EXPORTS ],
  declarations: [ EXPORTS ],
  providers: []
})
export class StartModule { }
