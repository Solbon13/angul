import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SERVER_URL } from 'src/app/my-config';
import { login } from 'src/app/store/auth-store/store/auth.actions';
import * as auth from 'src/app/store/auth-store/store/auth.selectors';

@Component({
  selector: 'app-auth-login-block',
  templateUrl: './auth-login-block.component.html',
  styleUrls: ['./auth-login-block.component.scss']
})
export class AuthLoginBlockComponent implements OnInit {

  loading$: Observable<boolean> = this.store$.pipe(select(auth.getLoading))
  loaded$: Observable<boolean> = this.store$.pipe(select(auth.getLoaded))
  serverError$: Observable<string> = this.store$.pipe(select(auth.getServerError))

  constructor(
    private store$: Store,
    private httpClient: HttpClient
    ) { }

  ngOnInit(): void {
  }

  onLogin(loginPayload: {login: string, password: string}) {
    console.log(loginPayload)
    this.store$.dispatch(login(loginPayload))
  }

  onClick() {
    this.httpClient.post(SERVER_URL + '/receiptsClear', {}).
    subscribe(console.log)
  }

}
