import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    quotes:Quote = new Quote("Even the rich cry","Pau",new Date(2019,6,9));
    // , vote:{upVote:10,downVote:20}
  
  
  
  ngOnInit() {
  }

}
