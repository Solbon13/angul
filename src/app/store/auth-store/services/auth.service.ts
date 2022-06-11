import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { select, Store } from '@ngrx/store';
import { filter, map, of } from 'rxjs';
import { SERVER_URL } from 'src/app/my-config';
import { AuthData } from '../store/auth.reducer';
import { getAuthData } from '../store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth$ = this.store$.pipe(
    select(getAuthData),
    // filter(authData => {
    //   console.log('!!',!!authData)
    //   console.log('!',!authData)
    //   return authData != undefined
    // }),
    map(authData => !!authData)
  )

  isGuest$ = this.isAuth$.pipe(
    map(isAuth => !isAuth)
  )

  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
    private store$: Store
  ) { }

  login(body: { login: string, password: string }) {
    return this.httpClient.post<AuthData>(
      SERVER_URL + '/login',
      body
    ).pipe(
      map(res => ({
        ...res,
        ...this.jwtHelperService.decodeToken(res.token)
      }))
    )
  }
}
