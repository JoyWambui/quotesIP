import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Never ever accept "Because You Are A Woman" as a reason for doing or not doing anything.', 'Chimamanda Ngozi ', 'Joy',0,0, new Date()),
    new Quote(2,'The way to get started is to quit talking and begin doing.','Walt Disney', 'Britney',0,0, new Date()),
    new Quote(3,"Sometimes when I close my eyes, I can't see.","Anonymous", "Greg",0,0, new Date()),
    new Quote(4,'When you reach the end of your rope, tie a knot in it and hang on.','Eleanor Roosevelt','Jacob',0,0, new Date()),
    new Quote(5,'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.','Maya Angelou','Samantha',0,0, new Date()),
    new Quote(6,'Talk is cheap. Show me the code.','Linus Torvalds','Cartman',0,0, new Date()),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
