import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  showNumber = true;
  numbers = [1, 2, 3, 4, 5, 65, 76, 76, 69, 78];
  constructor() {}

  ngOnInit(): void {}
  // show() {
  //   this.numbers = [1, 2, 3, 4, 5, 65, 76, 76, 69, 78];
  // }
  // hide() {
  //   this.numbers = [];
  // }
  toggleNumber() {
    this.showNumber = !this.showNumber;
  }
}
