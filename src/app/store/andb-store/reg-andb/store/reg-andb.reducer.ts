import { createReducer, on } from "@ngrx/store";
import { RegAndbState } from "../../const";
import { loadRegAndb, loadRegAndbFailed, loadRegAndbSuccess } from "./reg-andb.actions";

const initialState: RegAndbState = {
    loadingRegAndb: false,
    loadedRegAndb: true,
    serverErrorRegAndb: '',
    andbRegData: [],
}

export const RegAndbReducer = createReducer(
    initialState,
    on(loadRegAndb, state => ({
        ...state,
        loadingRegAndb: true,
    })),
    on(loadRegAndbSuccess, (state) => ({
        ...state,
        // andbAgregatorFullData: googleData.data,
        loadedRegAndb: true,
        loadingRegAndb: false,
        serverErrorRegAndb: ''
    })),
    on(loadRegAndbFailed, (state, { serverErrorRegAndb }) => ({
        ...state,
        loadedRegAndb: true,
        loadingRegAndb: false,
        serverErrorRegAndb
    })),
)