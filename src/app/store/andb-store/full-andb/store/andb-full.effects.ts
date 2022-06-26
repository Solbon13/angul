import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AndbFullService } from "../services/andb-full.service";
import { loadAndbFull, loadAndbFullFailed, loadAndbFullSuccess } from "./andb-full.actions";

@Injectable()
export class AndbFullEffects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType(loadAndbFull),
        switchMap(action =>
            this.andbFullService.loadAndbFull(
            //     {
            //     login: action.login,
            //     password: action.password
            // }
            ).pipe(
                map(() => loadAndbFullSuccess()),
                catchError(error => of(loadAndbFullFailed({ serverErrorAndbFull: error.message })))
            )
        )
    ))


    constructor(
        private actions$: Actions,
        private andbFullService: AndbFullService,
    ) { }

}