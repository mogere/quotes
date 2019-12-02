import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input() quote:Quote;
  constructor() { }

  ngOnInit() {
  }

}
