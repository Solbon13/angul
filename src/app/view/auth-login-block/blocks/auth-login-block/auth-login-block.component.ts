import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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

  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  onLogin(loginPayload: {login: string, password: string}) {
    console.log(loginPayload)
    this.store$.dispatch(login(loginPayload))
  }

}
