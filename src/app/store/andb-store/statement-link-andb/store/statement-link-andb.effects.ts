import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { StatementLinkAndbService } from "../services/statement-link-andb.service";
import { loadStatementLinkAndb, loadStatementLinkAndbFailed, loadStatementLinkAndbSuccess } from "./statement-link-andb.actions";

@Injectable()
export class StatementLinkAndbEffects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType(loadStatementLinkAndb),
        switchMap(action =>
            this.StatementLinkAndbService.loadStatementLinkAndb(
            //     {
            //     login: action.login,
            //     password: action.password
            // }
            ).pipe(
                map((data) => loadStatementLinkAndbSuccess(data)),
                catchError(error => of(loadStatementLinkAndbFailed({ serverErrorStatementLinkAndb: error.message })))
            )
        )
    ))


    constructor(
        private actions$: Actions,
        private StatementLinkAndbService: StatementLinkAndbService,
    ) { }

}