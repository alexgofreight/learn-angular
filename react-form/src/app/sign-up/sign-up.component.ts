import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  
  
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      username: new FormControl(""),
      password: new FormControl(""),
      confirmPassword: new FormControl("")
    });
  }

  ngOnInit(): void {
    
  }

  clear() {
    this.userForm.reset();
  }

  onSubmit() {
    console.log(this.userForm.value)
  }
}
