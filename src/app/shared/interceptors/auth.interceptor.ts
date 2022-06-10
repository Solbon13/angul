import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, EMPTY, first, flatMap, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getAccessToken } from 'src/app/store/auth-store/store/auth.selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private store$: Store
  ) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.store$.pipe(
      select(getAccessToken),
      first(),
      flatMap( token => {
        const authRequest = token ? request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
      }) : request
      return next.handle(authRequest)
      // ошибка TS
      // .pipe(
      //   catchError(err => {
      //     if (err instanceof HttpErrorResponse) {
      //       if (err.status == 401) {
      //         console.log('редирект на авторизацию')
      //         return EMPTY
      //       }
      //       throw err
      //     }
      //   })
      // );
      })
    )
  }
}
