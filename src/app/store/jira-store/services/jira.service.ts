import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SERVER_URL } from 'src/app/my-config';
import { JiraData, JiraRequest } from '../const';


@Injectable({
  providedIn: 'root'
})
export class JiraService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  loadJira(body: JiraRequest) {
    const req = {
      addressJira: JSON.stringify({
        ...body
      })
    }
    return this.httpClient.post<JiraData[]>(
      SERVER_URL + '/jira',
      req
    )
    .pipe(
      map(res => res)
    )
  }
}
