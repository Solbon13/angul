import { createReducer, on } from "@ngrx/store";
import { PtkAndbState } from "../../const";
import { loadPtkAndb, loadPtkAndbFailed, loadPtkAndbSuccess } from "./ptk-andb.actions";

const initialState: PtkAndbState = {
    loadingPtkAndb: false,
    loadedPtkAndb: true,
    serverErrorPtkAndb: '',
    andbPTKData: [],
}

export const PtkAndbReducer = createReducer(
    initialState,
    on(loadPtkAndb, state => ({
        ...state,
        loadingPtkAndb: true,
    })),
    on(loadPtkAndbSuccess, (state) => ({
        ...state,
        // andbAgregatorFullData: googleData.data,
        loadedPtkAndb: true,
        loadingPtkAndb: false,
        serverErrorPtkAndb: ''
    })),
    on(loadPtkAndbFailed, (state, { serverErrorPtkAndb }) => ({
        ...state,
        loadedPtkAndb: true,
        loadingPtkAndb: false,
        serverErrorPtkAndb
    })),
)