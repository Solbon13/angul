import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';
import { SERVER_URL } from 'src/app/my-config';
import { AuthData } from '../store/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
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
