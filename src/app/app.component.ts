import {Component, Inject} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {DOCUMENT, Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // Feature 3 interpolation : replace {{}}
  interpolation: ['((', '))']
})
export class AppComponent {
  name = 'angular-features';
  value = 2;

  constructor(@Inject(DOCUMENT) private doc: Document,
              private title: Title,
              private  meta: Meta,
              private location: Location) {
    // Feature 1 Title.
    this.title.setTitle('wow! I have set title.');
    // Feature 2 Meta.
    this.meta.addTag({name: 'site', content: 'my demo site'});

    console.log(this.doc);
  }

  go() {
    this.location.go('');
  }

  goBack() {
    this.location.back();
  }

  goFowrd() {
    this.location.forward();
  }
}
