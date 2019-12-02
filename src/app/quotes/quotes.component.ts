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
    this.quotes= [{
      
      text:'Even the rich cry',
      author:'Anonymous',
      timePassed:new Date(2019,6,9),
      vote:{
        upVote:10,
        downVote:5
      }
    },
    {
      
      text:'It is never too late to start',
      author:'James Brown',
      timePassed:new Date(),
      vote:{
        upVote:15,
        downVote:7
      }
    },
    {
      
      text:'Even the rich cry',
      author:'Anonymous',
      timePassed:new Date(2019,6,9),
      vote:{
        upVote:10,
        downVote:5
      }
    }]
  }
  
  ngOnInit() {
  }

  deleteQuote(index){
    
      let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quotes[index].author}?`)
    
    if (toDelete){
      this.quotes.splice(index,1);;
    }
  }

  addNewQuote(quote){
    quote.text = quote.text;
    quote.author = quote.author;
    quote.timePassed = new Date(quote.timePassed);
    quote.upVote = quote.upVote;
    quote.downVote = quote.downVote;
    this.quotes.push(quote);
  }
}


