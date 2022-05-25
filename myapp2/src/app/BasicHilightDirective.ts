import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[appBasicHilight]',
})
export class BasicHilightDirective implements OnInit {
  constructor(private someElement: ElementRef) {}
  ngOnInit(): void {
    this.someElement.nativeElement.style.backgroundColor = 'lightgreen';
  }
}
