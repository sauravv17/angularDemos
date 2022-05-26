import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { RformsComponent } from './rforms/rforms.component';
import { TformsComponent } from './tforms/tforms.component';

const appRoutes: Routes = [
  { path: 'tforms', component: TformsComponent },
  { path: 'rforms', component: RformsComponent },
];
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
