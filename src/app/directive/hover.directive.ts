import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('black');
  }
  constructor(private el: ElementRef) {
   }
   private highlight(color: string) {
     console.log("directive called")
     
     this.el.nativeElement.style.opacity = 1;
    this.el.nativeElement.style.color = color;
  }

}
