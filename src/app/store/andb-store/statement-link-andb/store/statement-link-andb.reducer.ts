import { createReducer, on } from "@ngrx/store";
import { StatementLinkAndbState } from "../../const";
import { loadStatementLinkAndb, loadStatementLinkAndbFailed, loadStatementLinkAndbSuccess } from "./statement-link-andb.actions";

const initialState: StatementLinkAndbState = {
    loadingStatementLinkAndb: false,
    loadedStatementLinkAndb: true,
    serverErrorStatementLinkAndb: '',
    andbStatementLinkData: [],
}

export const StatementLinkAndbReducer = createReducer(
    initialState,
    on(loadStatementLinkAndb, state => ({
        ...state,
        loadingStatementLinkAndb: true,
    })),
    on(loadStatementLinkAndbSuccess, (state) => ({
        ...state,
        // andbAgregatorFullData: googleData.data,
        loadedStatementLinkAndb: true,
        loadingStatementLinkAndb: false,
        serverErrorStatementLinkAndb: ''
    })),
    on(loadStatementLinkAndbFailed, (state, { serverErrorStatementLinkAndb }) => ({
        ...state,
        loadedStatementLinkAndb: true,
        loadingStatementLinkAndb: false,
        serverErrorStatementLinkAndb
    })),
)