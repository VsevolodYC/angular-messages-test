import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {ConsumerService} from './services/consumer/consumer.service';
import {PresenterComponent} from './components/presenter/presenter.component';
import {MessageCardComponent} from './components/message-card/message-card.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [
    SpinnerComponent,
    PresenterComponent,
    MessageCardComponent
  ],
  exports: [
    SpinnerComponent,
    PresenterComponent,
    MessageCardComponent
  ],
  providers: [ConsumerService]
})

/**
 * SharedModule
 *
 * This module is used to import and declare modules and components in application
 */
export class SharedModule {
}
