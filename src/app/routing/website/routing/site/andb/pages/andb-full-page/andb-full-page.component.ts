import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-andb-full-page',
  templateUrl: './andb-full-page.component.html',
  styleUrls: ['./andb-full-page.component.scss']
})
export class AndbFullPageComponent implements OnInit {

  validateForm!: FormGroup

  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      guidStatement: [''],
      guidVerdict: [''],
      regNumber: [''],
      extractNumber: ['']
    });
  }

  submitForm() {
    console.log('submit', this.validateForm.value);
  }

}
