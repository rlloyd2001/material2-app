import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {AppComponent, DialogContent} from './app.component';
import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
  ],
  declarations: [AppComponent, DialogContent],
  entryComponents: [DialogContent],
  bootstrap: [AppComponent],
})
export class AppModule { }
