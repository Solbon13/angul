import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-astp-page',
  templateUrl: './astp-page.component.html',
  styleUrls: ['./astp-page.component.scss']
})
export class AstpPageComponent implements OnInit {

  validateForm!: FormGroup;
  filterASTP = ''

  submitForm(): void {
    if (this.validateForm.valid) {
      let arrASTP = this.validateForm.value['numbers'].split('\n')
      this.filterASTP = 'wonum in (' + arrASTP.toString() + ')'

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      numbers: [null, [Validators.required]],
    });
  }

}
