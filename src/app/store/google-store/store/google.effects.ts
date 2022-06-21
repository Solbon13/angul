import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { GoogleService } from "../services/google.service";
import { loadGoogle, loadGoogleFailed, loadGoogleSuccess } from "./google.actions";


@Injectable()
export class GoogleEffects {

    googleLoad$ = createEffect(() => this.actions$.pipe(
        ofType(loadGoogle),
        switchMap(action =>
            this.googleServices.loadGoogle().pipe(
                map((data) => loadGoogleSuccess({data})),
                catchError(error => of(loadGoogleFailed({ serverError: error.message })))
            )
        )
    ))

    constructor(
        private actions$: Actions,
        private googleServices: GoogleService,
    ) { }

}