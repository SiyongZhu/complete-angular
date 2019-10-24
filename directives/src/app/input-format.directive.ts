import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'url';

// define a customer directive
@Directive({
  selector: '[appInputFormat]' //any element has appInputFormat attribute will have access to the behaviour
})
export class InputFormatDirective {

  // @Input('appInputFormat') format //If you only have one input, you can use set input name directly
  // In html, use it like <input [appInputFormat]='lowercase'>
  @Input('format') format //format is used in html as part of input for this directive
  constructor(private el: ElementRef) { } //define el so function can use it to retrieve element 

  //@HostListener('focus') will run onFocus function when focus action is performed 
  //on elements that has InputFormatDirective attribute
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
