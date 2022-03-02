import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective implements OnInit {
  // For assigning different properties of host element
  @HostBinding('class.trigger') get trigger() {
    return true; // True adds trigger class where as false removes it
  }

  // For listening to events on host element
  @HostListener('click')
  onClicked() {
    console.log('Host Listener caught click event on ', this.element);
  }

  @Input('customLabel')
  public label: string = '';

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.style = 'color: red';
    this.element.nativeElement.innerHTML =
      this.element.nativeElement.innerHTML + this.label;
  }
}
