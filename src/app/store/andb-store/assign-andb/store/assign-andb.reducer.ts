import { createReducer, on } from "@ngrx/store";
import { AssignAndbState } from "../../const";
import { loadAssignAndb, loadAssignAndbFailed, loadAssignAndbSuccess } from "./assign-andb.actions";

const initialState: AssignAndbState = {
    loadingAssignAndb: false,
    loadedAssignAndb: true,
    serverErrorAssignAndb: '',
    andbAssignData: [],
}

export const AssignAndbReducer = createReducer(
    initialState,
    on(loadAssignAndb, state => ({
        ...state,
        loadingAssignAndb: true,
    })),
    on(loadAssignAndbSuccess, (state) => ({
        ...state,
        // andbAgregatorFullData: googleData.data,
        loadedAssignAndb: true,
        loadingAssignAndb: false,
        serverErrorAssignAndb: ''
    })),
    on(loadAssignAndbFailed, (state, { serverErrorAssignAndb }) => ({
        ...state,
        loadedAssignAndb: true,
        loadingAssignAndb: false,
        serverErrorAssignAndb
    })),
)