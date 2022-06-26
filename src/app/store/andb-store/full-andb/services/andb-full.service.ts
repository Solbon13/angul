import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SERVER_URL } from 'src/app/my-config';


@Injectable({
  providedIn: 'root'
})
export class AndbFullService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  loadAndbFull() {
    return this.httpClient.post(
      SERVER_URL + '/login',
      {}
    )
    .pipe(
      map(res => {
        console.log(res)
        return res
      })
    )
  }
}
