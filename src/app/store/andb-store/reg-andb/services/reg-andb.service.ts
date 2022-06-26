import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SERVER_URL } from 'src/app/my-config';
import { andbRegData } from '../../const';


@Injectable({
  providedIn: 'root'
})
export class RegAndbService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  loadRegAndb() {
    return this.httpClient.post<{data: andbRegData[]}>(
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
