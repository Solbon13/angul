import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { GOOGLE_URL, SERVER_URL } from 'src/app/my-config';
import { GoogleData } from '../const';


@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  loadGoogle() {
    return this.httpClient.get<GoogleData[]>(
      GOOGLE_URL,
    )
    .pipe(
      map(res => {
        console.log(res)
        return res
      })
    )
  }
}
