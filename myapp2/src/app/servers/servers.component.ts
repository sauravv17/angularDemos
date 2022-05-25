import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  filteredStatus = '';
  servers = [
    {
      name: 'QA Server',
      instanceType: 'medium',
      started: new Date(2017, 1, 15),
      status: 'stable',
    },
    {
      name: 'Production Server',
      instanceType: 'large',
      started: new Date(2018, 8, 11),
      status: 'stable',
    },
    {
      name: 'Development Server',
      instanceType: 'small',
      started: new Date(),
      status: 'offline',
    },
    {
      name: 'DB Server',
      instanceType: 'large',
      started: new Date(2020, 7, 22),
      status: 'critical',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  getStatusClasses(status: string) {
    return {
      'list-group-item-success': status === 'stable',
      'list-group-item-warning': status === 'offline',
      'list-group-item-danger': status === 'critical',
    };
  }
}
