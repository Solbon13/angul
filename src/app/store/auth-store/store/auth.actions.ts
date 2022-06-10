import { createAction, props } from "@ngrx/store";
import { AuthData } from "./auth.reducer";

export const login = createAction(
    '[Auth] login',
    props<{ login: string, password: string }>()
)

export const loginSuccess = createAction(
    '[Auth] login success',
    props<AuthData>()
)

export const loginFailed = createAction(
    '[Auth] login failed',
    props<{ serverError: string }>()
)

export const initAuth = createAction(
    '[Auth] init admin auth',
)

export const logoutSuccess = createAction(
    '[Auth] logout success',
)
