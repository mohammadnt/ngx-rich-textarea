import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import {RichTextareaModule} from '../../projects/ngx-rich-textarea/src/lib/rich-textarea.module';
import {PickerModule} from '@ctrl/ngx-emoji-mart';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    RichTextareaModule,
    BrowserModule,
    AppRoutingModule,
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
