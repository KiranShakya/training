import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective implements OnInit {
  @Input('customLabel')
  public label: string = '';

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.style = 'color: red';
    this.element.nativeElement.innerHTML =
      this.element.nativeElement.innerHTML + this.label;
  }
}
