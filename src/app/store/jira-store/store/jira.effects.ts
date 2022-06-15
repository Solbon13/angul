import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { JiraService } from "../services/jira.service";
import { loadJira, loadJiraFailed, loadJiraSuccess } from "./jira.actions";


@Injectable()
export class JiraEffects {

    jiraLoad$ = createEffect(() => this.actions$.pipe(
        ofType(loadJira),
        switchMap(action =>{
            console.log('effect jira')
            return this.jiraServices.loadJira(action).pipe(
                map((data) => loadJiraSuccess({data})),
                catchError(error => of(loadJiraFailed({ serverError: error.message })))
            )}
        )
    ))

    constructor(
        private actions$: Actions,
        private jiraServices: JiraService,
    ) { }

}