import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SERVER_URL } from 'src/app/my-config';
import { andbAgregatorData, andbAgregatorHistoryData } from '../../const';


@Injectable({
  providedIn: 'root'
})
export class AgregatorAndbService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  loadAgregatorAndb() {
    return this.httpClient.post<{dataAgregator: andbAgregatorData[], dataAgregatorHistory: andbAgregatorHistoryData[]}>(
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
