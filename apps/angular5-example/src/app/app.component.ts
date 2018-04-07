import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  navBarCollapsed = true;
  constructor() {}

  toggleNav(closeOnly?: boolean) {
    if (closeOnly) {
      this.navBarCollapsed = true;
    } else {
      this.navBarCollapsed = !this.navBarCollapsed;
    }
  }
}
