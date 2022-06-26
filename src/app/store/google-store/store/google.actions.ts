import { createAction, props } from "@ngrx/store";
import { GoogleData } from "../const";

export const loadGoogle = createAction(
    '[Google] load google'
)

export const loadGoogleSuccess = createAction(
    '[Google] load google success',
    props<{data: GoogleData[]}>()
)

export const loadGoogleFailed = createAction(
    '[Google] load google failed',
    props<{ serverError: string }>()
)
