import {BrowserModule} from '@angular/platform-browser';
import {APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, ComponentRef, NgModule} from '@angular/core';

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
  providers: [Location,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: APP_INITIALIZER, useFactory: runSettingsOnInit, multi: true},
    {provide: APP_BOOTSTRAP_LISTENER, useFactory: runBootstrap, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// Feature 7: APP_INITIALIZER
export function runSettingsOnInit() {
  return () => console.log('app init');
}

// Feature 8: APP_BOOTSTRAP_LISTENER
export function runBootstrap() {
  return (component: ComponentRef<any>) => {
    console.log(component.instance);
  };
}

