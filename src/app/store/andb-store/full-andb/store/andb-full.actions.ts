import { createAction, props } from "@ngrx/store";

export const loadAndbFull = createAction(
    '[Andb full] load andb full'
)

export const loadAndbFullSuccess = createAction(
    '[Andb full] load andb success',
    // props<{data: g[]}>()
)

export const loadAndbFullFailed = createAction(
    '[Andb full] load andb failed',
    props<{ serverErrorAndbFull: string }>()
)
