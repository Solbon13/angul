import { createAction, props } from "@ngrx/store";
import { andbStatementLinkData } from "../../const";

export const loadStatementLinkAndb = createAction(
    '[Andb StatementLink] load andb StatementLink'
)

export const loadStatementLinkAndbSuccess = createAction(
    '[Andb StatementLink] load andb StatementLink success',
    props<{data: andbStatementLinkData[]}>()
)

export const loadStatementLinkAndbFailed = createAction(
    '[Andb StatementLink] load andb StatementLink failed',
    props<{ serverErrorStatementLinkAndb: string }>()
)
