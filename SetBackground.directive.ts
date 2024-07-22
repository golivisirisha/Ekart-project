// SetBackground.directive.ts
import { Directive, ElementRef } from '@angular/core';

@Directive({

  selector: '[setBackground]',
})
export class SetBackgroundDirective {
  constructor(private elementRef: ElementRef) {}
  
  ngOnInit() {this.elementRef.nativeElement.style.backgroundColor = "blue";}
}