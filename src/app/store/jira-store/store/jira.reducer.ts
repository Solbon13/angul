import { createReducer, on } from "@ngrx/store";
import { JiraState } from "../const";
import { loadJira, loadJiraFailed, loadJiraSuccess } from "./jira.actions";

const initialState: JiraState = {
    loading: false,
    loaded: true,
    serverError: '',
    jiraData: []
}

export const JiraReducer = createReducer(
    initialState,
    on(loadJira, state => ({
        ...state,
        loading: true,
    })),
    on(loadJiraSuccess, (state, jiraData) => ({
        ...state,
        jiraData: jiraData.data,
        loaded: true,
        loading: false,
        serverError: ''
    })),
    on(loadJiraFailed, (state, { serverError }) => ({
        ...state,
        jiraData: [],
        loaded: true,
        loading: false,
        serverError
    })),
)