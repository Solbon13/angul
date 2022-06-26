import { createReducer, on } from "@ngrx/store";
import { AndbFullState } from "../../const";
import { loadAndbFull, loadAndbFullFailed, loadAndbFullSuccess } from "./andb-full.actions";

const initialState: AndbFullState = {
    loadingAndbFull: false,
    loadedAndbFull: true,
    serverErrorAndbFull: '',
    andbAgregatorFullData: [],
    andbAgregatorFullHistoryData: [],
    andbAssignFullData: [],
    andbPTKFullData: [],
    andbRegFullData: [],
    andbStatementVerdictFullData: []
}

export const AndbFullReducer = createReducer(
    initialState,
    on(loadAndbFull, state => ({
        ...state,
        loadingAndbFull: true,
    })),
    on(loadAndbFullSuccess, (state, googleData) => ({
        ...state,
        // andbAgregatorFullData: googleData.data,
        loadedAndbFull: true,
        loadingAndbFull: false,
        serverErrorAndbFull: ''
    })),
    on(loadAndbFullFailed, (state, { serverErrorAndbFull }) => ({
        ...state,
        loadedAndbFull: true,
        loadingAndbFull: false,
        serverErrorAndbFull
    })),
)