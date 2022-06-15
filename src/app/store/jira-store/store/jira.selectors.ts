import { createFeatureSelector, createSelector } from "@ngrx/store";
import { JiraState, JIRA_FEATURE_NAME } from "../const";

const getFeature = createFeatureSelector<JiraState>(JIRA_FEATURE_NAME)

export const getLoading = createSelector(
    getFeature,
    state => state.loading
)

export const getLoaded = createSelector(
    getFeature,
    state => state.loaded
)

export const getServerError = createSelector(
    getFeature,
    state => state.serverError
)

export const getJiraData = createSelector(
    getFeature,
    state => state.jiraData
)
