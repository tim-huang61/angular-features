import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'angular-features';

  constructor(private title: Title) {
    // Feature 1.
    this.title.setTitle('wow! I have set title.');
  }
}
