import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(body: { login: string, password: string }) {
    return this.httpClient.post<{ accessToken: string }>(
      'http://localhost:5500/login',
      body
    )
  }
}
