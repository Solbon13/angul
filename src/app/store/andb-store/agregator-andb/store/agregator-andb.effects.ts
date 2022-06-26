import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AgregatorAndbService } from "../services/agregator-andb.service";
import { loadAgregatorAndb, loadAgregatorAndbFailed, loadAgregatorAndbSuccess } from "./agregator-andb.actions";

@Injectable()
export class AgregatorAndbEffects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType(loadAgregatorAndb),
        switchMap(action =>
            this.agregatorAndbService.loadAgregatorAndb(
            //     {
            //     login: action.login,
            //     password: action.password
            // }
            ).pipe(
                map((data) => loadAgregatorAndbSuccess(data)),
                catchError(error => of(loadAgregatorAndbFailed({ serverErrorAgregatorAndb: error.message })))
            )
        )
    ))


    constructor(
        private actions$: Actions,
        private agregatorAndbService: AgregatorAndbService,
    ) { }

}