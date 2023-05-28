import { TestBed } from '@angular/core/testing';

import { RichTextareaService } from './rich-textarea.service';

describe('RichTextareaService', () => {
  let service: RichTextareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RichTextareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
