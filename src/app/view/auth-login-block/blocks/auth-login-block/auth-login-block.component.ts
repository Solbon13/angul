import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-login-block',
  templateUrl: './auth-login-block.component.html',
  styleUrls: ['./auth-login-block.component.scss']
})
export class AuthLoginBlockComponent implements OnInit {

  serverError = ''

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(value: any) {
    console.log(value)
    this.serverError += '1'
  }

}
