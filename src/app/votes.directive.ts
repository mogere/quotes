import { Directive, HostListener, ElementRef,Input } from '@angular/core';
import { Quote } from './quote';
@Directive({
  selector: '[appVotes]'
})
export class VotesDirective {

  
  constructor(private elem:ElementRef) { 
    
    
  }
}
 