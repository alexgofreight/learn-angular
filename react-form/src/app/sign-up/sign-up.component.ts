import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validator } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)], this.customValidator.validateUsernameNotTaken.bind(this.customValidator)],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  }, {
    validator: this.customValidator.passwordMatchValidator('password', 'confirmPassword')
  })
  stateOptions: string[] = ['OI', 'OE', 'AI'];
  userAddressInfo: any = {
    street: 'ABC',
    city: 'TP',
    state: 'AI',
    zip: 123
  }

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomValidationService
  ) {}

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
