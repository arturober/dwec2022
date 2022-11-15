import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetColor]',
  standalone: true
})
export class SetColorDirective {
  @Input('color') color!: string;
  isSet = false;

  @HostBinding('style.background-color') bgColor!: string;

  @HostListener('click') onClick() {
    if(!this.isSet) {
      this.bgColor = this.color;
    } else {
      this.bgColor = "";
    }
    this.isSet = !this.isSet;
  }

  constructor() { }
}
