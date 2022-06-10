import { createReducer, on } from "@ngrx/store";
import { login, loginFailed, loginSuccess } from "./auth.actions";

export const AUTH_FEATURE_NAME = 'auth'

export interface AuthData {
    token: string;
    exp: number;
}
export interface AuthState {
    loading: boolean;
    loaded: boolean;
    serverError: string;
    authData?: AuthData;
}

const initialState: AuthState = {
    loading: false,
    loaded: true,
    serverError: ''
}

export const authReducer = createReducer(
    initialState,
    on(login, state => ({
        ...state,
        loading: true,
    })),
    on(loginSuccess, (state, {
        type,
        ...authData
    }: {type: string} & AuthData
        ) =>({
        ...state,
        authData,
        loaded: true,
        loading: false,
        serverError: ''
    })),
    on(loginFailed, (state, {serverError}) =>({
        ...state,
        authData: undefined,
        loaded: true,
        loading: false,
        serverError
    }))
    )