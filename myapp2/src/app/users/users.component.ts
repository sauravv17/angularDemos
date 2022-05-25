import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'Max',
    },
    {
      id: 2,
      name: 'John',
    },
    {
      id: 3,
      name: 'Robert',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
