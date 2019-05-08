import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'url';

// define a customer directive
@Directive({
  selector: '[appInputFormat]' //any element has appInputFormat attribute will have access to the behaviour
})
export class InputFormatDirective {

  @Input('format') format
  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log("on Focus")
  }
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value
    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase()
    else
    this.el.nativeElement.value = value.toUpperCase()
  }
  

}
