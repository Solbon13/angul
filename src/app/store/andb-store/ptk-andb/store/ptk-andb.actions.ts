import { createAction, props } from "@ngrx/store";
import { andbPTKData } from "../../const";

export const loadPtkAndb = createAction(
    '[Andb PTK] load andb PTK'
)

export const loadPtkAndbSuccess = createAction(
    '[Andb PTK] load andb PTK success',
    props<{data: andbPTKData[]}>()
)

export const loadPtkAndbFailed = createAction(
    '[Andb PTK] load andb PTK failed',
    props<{ serverErrorPtkAndb: string }>()
)
