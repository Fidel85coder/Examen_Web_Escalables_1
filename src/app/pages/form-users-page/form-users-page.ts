import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-users-page',
  imports: [ReactiveFormsModule],
  templateUrl: './form-users-page.html',
  styleUrl: './form-users-page.css',
})
export class FormUsersPage {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    image: new FormControl('', [Validators.required]),
  });
  public onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Procesar', this.userForm.value);
      this.userForm.reset();
    } else {
      console.log('incorrectos');
      this.userForm.markAllAsTouched();
    }
  }
}
