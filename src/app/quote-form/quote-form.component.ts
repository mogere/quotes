import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  newQuote:Quote = {
      text:'',
      author:'',
      timePassed:new Date(),
      vote:{
        upVote:0,
        downVote:0
      }
    }
   
  constructor() { 
    // this.newQuote = {
    //   text:'',
    //   author:'QP',
    //   timePassed:new Date(),
    //   vote:{
    //     upVote:0,
    //     downVote:0
    //   }
    // }
    
  }
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }
  ngOnInit() {
  }

}
