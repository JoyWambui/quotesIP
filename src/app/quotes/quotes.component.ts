import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Never ever accept "Because You Are A Woman" as a reason for doing or not doing anything.', 'Chimamanda Ngozi ', 'Joy', 15, 0, new Date()),
    new Quote(2, 'The way to get started is to quit talking and begin doing.', 'Walt Disney', 'Britney', 3, 1, new Date()),
    new Quote(3, "Sometimes when I close my eyes, I can't see.", "Anonymous", "Greg", 4, 10, new Date()),
    new Quote(4, 'When you reach the end of your rope, tie a knot in it and hang on.', 'Eleanor Roosevelt', 'Jacob', 6, 2, new Date()),
    new Quote(5, 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.', 'Maya Angelou', 'Samantha', 1, 0, new Date()),
    new Quote(6, 'Talk is cheap. Show me the code.', 'Linus Torvalds', 'Cartman', 7, 2, new Date()),
  ];
  toggleDetails(index: number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deletesQuote(deleteQuote: any, index: number) {
    if (deleteQuote) {
      this.quotes.splice(index, 1);
    }
  }
  newQuoteAdd(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }
  preVotes!: number;
  votes!: number;
  counter!: number;
  @Output() highlight = new EventEmitter<boolean>();
  addHighlight(complete: boolean) {
    this.highlight.emit(complete);
  }


  upVotes(addHighlight: any) {
    if (addHighlight) {
      this.votes = 0;
      this.preVotes = 0;
      for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
        this.votes = this.quotes[this.counter].upVote;
        if (this.votes > this.preVotes) {
          this.preVotes = this.votes
        }
      }
    }
    return this.preVotes;
  }




  constructor() { }

  ngOnInit(): void {
  }

}
