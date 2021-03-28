import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote = new Quote(0,"","","",0,0, new Date());
  @Output() addedQuote = new EventEmitter<Quote>();
  addQuote(){
    this.addedQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
