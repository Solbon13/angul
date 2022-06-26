import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SERVER_URL } from 'src/app/my-config';
import { andbAssignData } from '../../const';


@Injectable({
  providedIn: 'root'
})
export class AssignAndbService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  loadAssignAndb() {
    return this.httpClient.post<{data: andbAssignData[]}>(
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
