import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css'],
})
export class RformsComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUserNames = ['admin', 'master', 'administrator'];
  constructor() {}
  signUpForm: FormGroup;
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.forbiddenNames.bind(this),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
  }
  onSubmit() {
    console.log(this.signUpForm.value);
    console.log(this.signUpForm);
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) >= 0) {
      return { nameIsForbidden: true };
    }
    return null;
  }
}
