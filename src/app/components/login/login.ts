import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors } from '@angular/forms';

function passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;

  const hasLower = /[a-z]/.test(value);
  const hasUpper = /[A-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSpecial = /[@$!%*?&]/.test(value);

  return hasLower && hasUpper && hasNumber && hasSpecial ? null : { weakPassword: true };
}
function lebanonPhoneCheck(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;
  const hasExtension = /^\+961/.test(value);
  if (!hasExtension) return { noExtension: true };
  const eightNumbers = /^\+961\d{8}$/.test(value);
  if (!eightNumbers) {
    return { noEnoughNumbers: true };
  }
  return null;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(8), passwordStrengthValidator]],
    phoneNumber: ['', [Validators.required, Validators.minLength(12), lebanonPhoneCheck]],
  });

  onSubmit() {
    if (this.form.invalid) return;
    localStorage.setItem('token', 'fake-token');
    this.router.navigate(['/']);
  }
}
