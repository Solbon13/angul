import { createAction, props } from "@ngrx/store";
import { andbAssignData } from "../../const";

export const loadAssignAndb = createAction(
    '[Andb assign] load andb assign'
)

export const loadAssignAndbSuccess = createAction(
    '[Andb assign] load andb assign success',
    props<{data: andbAssignData[]}>()
)

export const loadAssignAndbFailed = createAction(
    '[Andb assign] load andb assign failed',
    props<{ serverErrorAssignAndb: string }>()
)
