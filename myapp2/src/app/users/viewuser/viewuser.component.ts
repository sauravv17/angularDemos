import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css'],
})
export class ViewuserComponent implements OnInit {
  @Input()
  user: {
    id: number;
    name: string;
  };
  constructor() {}

  ngOnInit(): void {}
}
