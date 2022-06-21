import { createReducer, on } from "@ngrx/store";
import { GoogleState } from "../const";
import { loadGoogle, loadGoogleFailed, loadGoogleSuccess } from "./google.actions";

const initialState: GoogleState = {
    loading: false,
    loaded: true,
    serverError: '',
    googleData: []
}

export const GoogleReducer = createReducer(
    initialState,
    on(loadGoogle, state => ({
        ...state,
        loading: true,
    })),
    on(loadGoogleSuccess, (state, googleData) => ({
        ...state,
        googleData: googleData.data,
        loaded: true,
        loading: false,
        serverError: ''
    })),
    on(loadGoogleFailed, (state, { serverError }) => ({
        ...state,
        googleData: [],
        loaded: true,
        loading: false,
        serverError
    })),
)