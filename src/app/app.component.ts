import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modus-angular-test-0.1.40-ng14';
  crumbs = [
    { id: "1", display: "Crumb 1", route: "/board" },
    { id: "2", display: "Crumb 2", route: "/board" },
    { id: "3", display: "Crumb 3", route: "/board" },
    { id: "4", display: "Crumb 4", route: "/board" }
  ];
}
