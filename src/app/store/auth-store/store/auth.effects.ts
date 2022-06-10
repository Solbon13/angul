import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { login, loginFailed, loginSuccess } from "./auth.actions";

@Injectable()
export class AuthEffects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        switchMap(action =>
            this.authServices.login({
                login: action.login,
                password: action.password
            }).pipe(
                map(loginSuccessData => loginSuccess(loginSuccessData)),
                catchError(error => of(loginFailed({serverError: error.message})))
            )
        )
    ))

    constructor(
        private actions$: Actions,
        private authServices: AuthService
    ) { }

}