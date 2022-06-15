import { createAction, props } from "@ngrx/store";
import { JiraData, JiraRequest } from "../const";

export const loadJira = createAction(
    '[Jira] load jira',
    props<JiraRequest>()
)

export const loadJiraSuccess = createAction(
    '[Jira] load jira success',
    props<{data: JiraData[]}>()
)

export const loadJiraFailed = createAction(
    '[Jira] load jira failed',
    props<{ serverError: string }>()
)
