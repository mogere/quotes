import { Component, OnInit, HostListener } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    quotes:Quote;
    // , vote:{upVote:10,downVote:20}
  
  constructor(){
    this.quotes= {
      text:'Even the rich cry',
      author:'Anonymous',
      timePassed:new Date(2019,6,9),
      vote:{
        upVote:10,
        downVote:5
      }
    }
    // new Quote("Even the rich cry","Pau",new Date(2019,6,9));
  }
  
  ngOnInit() {
  }

  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes}?`)
    
    if (toDelete){
      this.quotes;
    }
  }
}
}
