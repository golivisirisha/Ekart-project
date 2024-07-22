import { Directive,ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDemo]',
  standalone: true
})
export class DemoDirective implements OnInit{

  constructor(private elementRef: ElementRef) {}ngOnInit() {this.elementRef.nativeElement.style.color = "yellow";}

}
