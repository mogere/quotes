import { Component, OnInit, HostListener } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    quotes:Quote[];
    
    
    
  
  constructor(){
    this.quotes= [new Quote('Even the rich cry','Anonymous',new Date(2019,6,9),10,5),
    new Quote('It is never too late to start','James Brown',new Date(),15,7),      
    new Quote('Even the rich cry','Anonymous',new Date(2019,6,9),10,5)]
  }
  
  ngOnInit() {
  }

  deleteQuote(index){
      let toDelete = confirm(`Are you sure you want to delete this quote?`)
    
    if (toDelete){
      this.quotes.splice(index,1);;
    }
  }

  addNewQuote(quote){
    quote.timePassed = new Date(quote.timePassed);
    this.quotes.push(quote);
  }

  addLikes(){
    
    }
  addDislikes(){
    
  }
}


