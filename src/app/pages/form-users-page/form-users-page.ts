import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-users-page',
  imports: [ReactiveFormsModule],
  templateUrl: './form-users-page.html',
  styleUrl: './form-users-page.css',
})
export class FormUsersPage {
  private userService = inject(UserService);
  private router = inject(Router);

  userForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)], }),
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email], }),
    image: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });
  public onSubmit(): void {
    if (this.userForm.valid) {
      const formData = this.userForm.getRawValue();
      this.userService.addUser(formData);
      this.router.navigate(['/']);
    } else {
      console.log('incorrect value ');
      this.userForm.markAllAsTouched();
    }
  }
}
