import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './common/shared.module';
import {AppConfig, initConfig} from './app.config';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
  ],
  declarations: [AppComponent],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfig],
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
}
