import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SERVER_URL } from 'src/app/my-config';
import { andbStatementLinkData } from '../../const';


@Injectable({
  providedIn: 'root'
})
export class StatementLinkAndbService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  loadStatementLinkAndb() {
    return this.httpClient.post<{data: andbStatementLinkData[]}>(
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
