import { createReducer, on } from "@ngrx/store";
import { login, loginFailed, loginSuccess, logoutSuccess } from "./auth.actions";

export const AUTH_FEATURE_NAME = 'auth'

export interface AuthData {
    token: string;
    exp: number;
}
export interface AuthState {
    loading: boolean;
    loaded: boolean;
    serverError: string;
    authData: AuthData | null;
}

const initialState: AuthState = {
    loading: false,
    loaded: true,
    serverError: '',
    authData: null
}

export const authReducer = createReducer(
    initialState,
    on(login, state => ({
        ...state,
        loading: true,
    })),
    on(loginSuccess, (state, authData) => ({
        ...state,
        authData,
        loaded: true,
        loading: false,
        serverError: ''
    })),
    on(loginFailed, (state, { serverError }) => ({
        ...state,
        authData: null,
        loaded: true,
        loading: false,
        serverError
    })),
    on(logoutSuccess, () => ({
        ...initialState,
    }))
)