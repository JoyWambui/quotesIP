import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'})
export class HighlightQuoteDirective {

  constructor(private elem: ElementRef) {}
  @HostListener('highestVotes()') onHighestVotes() {
    this.highlight('yellow');
  }
  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }
}
