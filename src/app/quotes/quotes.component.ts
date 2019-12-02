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
      id:1,
      text:'Even the rich cry',
      author:'Anonymous',
      timePassed:new Date(2019,6,9),
      vote:{
        upVote:10,
        downVote:5
      }
    },
    {
      id:2,
      text:'It is never too late to start',
      author:'James Brown',
      timePassed:new Date(2019,7,9),
      vote:{
        upVote:15,
        downVote:7
      }
    },
    {
      id:3,
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
    
      let toDelete = confirm(`Are you sure you want to delete this quote by  ${this.quotes[index].author}?`)
    
    if (toDelete){
      this.quotes.splice(index,1);;
    }
  }
}


