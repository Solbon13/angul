import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SERVER_URL } from 'src/app/my-config';
import { andbPTKData } from '../../const';


@Injectable({
  providedIn: 'root'
})
export class PtkAndbService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  loadPtkAndb() {
    return this.httpClient.post<{data: andbPTKData[]}>(
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
