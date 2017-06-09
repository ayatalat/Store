import { Component } from '@angular/core';

@Component({
  // We'll call our root component app-component
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Store';

  constructor() {}
}