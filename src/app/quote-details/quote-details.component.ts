import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quotes'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() deleteQuote = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.deleteQuote.emit(complete);
  }
  @Output() voteCount = new EventEmitter<number>();

  upVotesCount(){
    this.voteCount.emit(this.quote.upVote,);
      this.quote.upVote +=1
  }
  downVotesCount(){
    this.voteCount.emit(this.quote.downVote,); 
      return this.quote.downVote +=1
  }



  constructor() { }

  ngOnInit(): void {
  }

}
