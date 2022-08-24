import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm={
    email:'',
    password:''
  }
  constructor() { }

  ngOnInit(): void {
  }
signup(){
    console.log('111')
}
}
