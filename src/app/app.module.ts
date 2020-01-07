import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule, Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

