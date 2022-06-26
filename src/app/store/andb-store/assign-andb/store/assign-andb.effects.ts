import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AssignAndbService } from "../services/assign-andb.service";
import { loadAssignAndb, loadAssignAndbFailed, loadAssignAndbSuccess } from "./assign-andb.actions";

@Injectable()
export class AssignAndbEffects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType(loadAssignAndb),
        switchMap(action =>
            this.assignAndbService.loadAssignAndb(
            //     {
            //     login: action.login,
            //     password: action.password
            // }
            ).pipe(
                map((data) => loadAssignAndbSuccess(data)),
                catchError(error => of(loadAssignAndbFailed({ serverErrorAssignAndb: error.message })))
            )
        )
    ))


    constructor(
        private actions$: Actions,
        private assignAndbService: AssignAndbService,
    ) { }

}