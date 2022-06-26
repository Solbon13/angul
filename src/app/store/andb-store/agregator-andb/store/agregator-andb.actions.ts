import { createAction, props } from "@ngrx/store";
import { andbAgregatorData, andbAgregatorHistoryData } from "../../const";

export const loadAgregatorAndb = createAction(
    '[Andb agregator] load andb agregator'
)

export const loadAgregatorAndbSuccess = createAction(
    '[Andb agregator] load andb agregator success',
    props<{dataAgregator: andbAgregatorData[], dataAgregatorHistory: andbAgregatorHistoryData[]}>()
)

export const loadAgregatorAndbFailed = createAction(
    '[Andb agregator] load andb agregator failed',
    props<{ serverErrorAgregatorAndb: string }>()
)
