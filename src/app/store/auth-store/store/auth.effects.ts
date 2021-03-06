import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { catchError, distinctUntilChanged, fromEvent, map, of, skip, switchMap, tap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { extractLoginData, initAuth, login, loginFailed, loginSuccess, logoutSuccess } from "./auth.actions";
import { AuthData } from "./auth.reducer";
import { getAuthData } from "./auth.selectors";

@Injectable()
export class AuthEffects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        switchMap(action =>
            this.authServices.login({
                login: action.login,
                password: action.password
            }).pipe(
                map(authData => loginSuccess(authData)),
                catchError(error => of(loginFailed({ serverError: error.message })))
            )
        )
    ))

    saveAuthDataToLocalStorage$ = createEffect(() => this.actions$.pipe(
        ofType(loginSuccess),
        tap(authData => {
            localStorage.setItem('authData', JSON.stringify(authData))
        })
    ), { dispatch: false })

    extractLoginData$ = createEffect(() => this.actions$.pipe(
        ofType(initAuth, extractLoginData),
        map(() => {
            const authDataString = localStorage.getItem('authData')
            if (!authDataString) {
                return logoutSuccess()
            }
            const authData: AuthData = JSON.parse(authDataString)
            if ((authData.exp * 1000 - 10 * 1000 - Date.now()) < 0) {
                return logoutSuccess()
            }
            return loginSuccess(authData)
        })
    ))

    listenStorageEffect$ = createEffect(() => this.actions$.pipe(
        ofType(initAuth),
        switchMap(() => fromEvent(window, 'storage')),
        map(() => extractLoginData())
    ))

    listenAuthorizeEffect$ = createEffect(() => this.actions$.pipe(
        ofType(initAuth),
        switchMap(() => this.authServices.isAuth$),
        distinctUntilChanged(),//???????????????????? ???????????????????? ?? ?????????????? ??????????????????. ???????? ???????????????? ??????????????????
        skip(1),
        tap(isAuthorized => {
            this.router.navigateByUrl(
                isAuthorized ? '/site' : '/auth'
            )
        })
    ), { dispatch: false })

    constructor(
        private actions$: Actions,
        private authServices: AuthService,
        private store$: Store,
        private router: Router
    ) { }

}