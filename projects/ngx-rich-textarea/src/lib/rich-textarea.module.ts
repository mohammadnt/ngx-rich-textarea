import { NgModule } from '@angular/core';
import { RichTextareaComponent } from './rich-textarea.component';
import {CustomTextareaComponent} from './custom-textarea/custom-textarea.component';
import {NgIf} from '@angular/common';



@NgModule({
  declarations: [
    CustomTextareaComponent,
    RichTextareaComponent
  ],
  imports: [
    NgIf
  ],
  exports: [
    RichTextareaComponent
  ]
})
export class RichTextareaModule { }
