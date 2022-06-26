import { createAction, props } from "@ngrx/store";
import { andbRegData } from "../../const";

export const loadRegAndb = createAction(
    '[Andb Reg] load andb Reg'
)

export const loadRegAndbSuccess = createAction(
    '[Andb Reg] load andb Reg success',
    props<{data: andbRegData[]}>()
)

export const loadRegAndbFailed = createAction(
    '[Andb Reg] load andb Reg failed',
    props<{ serverErrorRegAndb: string }>()
)
