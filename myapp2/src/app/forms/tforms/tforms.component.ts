import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tforms',
  templateUrl: './tforms.component.html',
  styleUrls: ['./tforms.component.css'],
})
export class TformsComponent implements OnInit {
  genders = ['Male', 'Female'];
  submitted = false;
  user = {
    username: '',
    email: '',
    secret: '',
    gender: '',
  };
  constructor() {}
  defaultQuestion = 'pet';
  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.user.username = form.value.userData.username;
    this.user.email = form.value.userData.email;
    this.user.gender = form.value.gender;
    this.submitted = true;
    form.reset;
  }
}
