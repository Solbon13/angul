import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-login-form-ui',
  templateUrl: './auth-login-form-ui.component.html',
  styleUrls: ['./auth-login-form-ui.component.scss']
})
export class AuthLoginFormUiComponent implements OnInit {

  @Input() formError = ''
  @Input() disabled = false
  @Output() login = new EventEmitter()

  validateForm!: FormGroup;

  onFormChange() {
    this.formError = ''
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.login.emit(this.validateForm.value)
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
