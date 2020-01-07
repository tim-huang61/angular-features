import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'angular-features';

  constructor(private title: Title, private  meta: Meta) {
    // Feature 1 Title.
    this.title.setTitle('wow! I have set title.');
    // Feature 2 Meta.
    this.meta.addTag({name: 'site', content: 'my demo site'});
  }
}
