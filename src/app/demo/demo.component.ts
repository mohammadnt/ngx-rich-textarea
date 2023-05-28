import {Component, ViewChild} from '@angular/core';
import {RichTextareaComponent} from '../../../projects/ngx-rich-textarea/src/lib/rich-textarea.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  @ViewChild('richTextArea') richTextAreaRef: RichTextareaComponent | undefined;
  messageTextString = '';
  disabled = false;

  onTextAreaFocusIn() {
    console.log('RichTextarea focused')
  }
  addEmoji(e: any) {
    this.richTextAreaRef?.addEmoji(e.emoji.native);
  }


}
