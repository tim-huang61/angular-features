import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // Feature 3 interpolation : replace {{}}
  interpolation: ['[[', ']]']
})
export class AppComponent {
  name = 'angular-features';

  constructor(private title: Title, private  meta: Meta, private location: Location) {
    // Feature 1 Title.
    this.title.setTitle('wow! I have set title.');
    // Feature 2 Meta.
    this.meta.addTag({name: 'site', content: 'my demo site'});
  }
}
