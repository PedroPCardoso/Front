import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exemplo-data-binding',
  templateUrl: 'data-binding.component.html',
})
export class DataBindingComponent {
  constructor() {  }
  url = 'http://www.twitter.com';
  urlimg = 'http://lorempixel.com/400/200/nature/';
}
