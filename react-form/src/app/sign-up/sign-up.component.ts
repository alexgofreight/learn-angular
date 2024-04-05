import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  userForm: FormGroup;
  stateOptions: string[] = ['OI', 'OE', 'AI'];
  userAddressInfo: any = {
    street: 'ABC',
    city: 'TP',
    state: 'AI',
    zip: 123
  }

  constructor() {
    this.userForm = new FormGroup({
      username: new FormControl(""),
      password: new FormControl(""),
      confirmPassword: new FormControl(""),
      address: new FormGroup({
        street: new FormControl(""),
        city: new FormControl(""),
        state: new FormControl(""),
        zip: new FormControl("")
      })
    });
  }

  ngOnInit(): void {
    
  }

  clear() {
    this.userForm.reset();
  }

  autoFill() {
    this.userForm.patchValue({
      address: this.userAddressInfo
    })
  }

  onSubmit() {
    console.log(this.userForm.value)
  }
}
