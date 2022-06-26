import { createReducer, on } from "@ngrx/store";
import { AgregatorAndbState, AndbFullState } from "../../const";
import { loadAgregatorAndb, loadAgregatorAndbFailed, loadAgregatorAndbSuccess } from "./agregator-andb.actions";

const initialState: AgregatorAndbState = {
    loadingAgregatorAndb: false,
    loadedAgregatorAndb: true,
    serverErrorAgregatorAndb: '',
    andbAgregatorData: [],
    andbAgregatorHistoryData: [],
}

export const AgregatorAndbReducer = createReducer(
    initialState,
    on(loadAgregatorAndb, state => ({
        ...state,
        loadingAgregatorAndb: true,
    })),
    on(loadAgregatorAndbSuccess, (state) => ({
        ...state,
        // andbAgregatorFullData: googleData.data,
        loadedAgregatorAndb: true,
        loadingAgregatorAndb: false,
        serverErrorAgregatorAndb: ''
    })),
    on(loadAgregatorAndbFailed, (state, { serverErrorAgregatorAndb }) => ({
        ...state,
        loadedAgregatorAndb: true,
        loadingAgregatorAndb: false,
        serverErrorAgregatorAndb
    })),
)