import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { RegAndbService } from "../services/reg-andb.service";
import { loadRegAndb, loadRegAndbFailed, loadRegAndbSuccess } from "./reg-andb.actions";

@Injectable()
export class RegAndbEffects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType(loadRegAndb),
        switchMap(action =>
            this.regAndbService.loadRegAndb(
            //     {
            //     login: action.login,
            //     password: action.password
            // }
            ).pipe(
                map((data) => loadRegAndbSuccess(data)),
                catchError(error => of(loadRegAndbFailed({ serverErrorRegAndb: error.message })))
            )
        )
    ))


    constructor(
        private actions$: Actions,
        private regAndbService: RegAndbService,
    ) { }

}