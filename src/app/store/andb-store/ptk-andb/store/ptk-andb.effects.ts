import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { PtkAndbService } from "../services/ptk-andb.service";
import { loadPtkAndb, loadPtkAndbFailed, loadPtkAndbSuccess } from "./ptk-andb.actions";

@Injectable()
export class PtkAndbEffects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType(loadPtkAndb),
        switchMap(action =>
            this.ptkAndbService.loadPtkAndb(
            //     {
            //     login: action.login,
            //     password: action.password
            // }
            ).pipe(
                map((data) => loadPtkAndbSuccess(data)),
                catchError(error => of(loadPtkAndbFailed({ serverErrorPtkAndb: error.message })))
            )
        )
    ))


    constructor(
        private actions$: Actions,
        private ptkAndbService: PtkAndbService,
    ) { }

}