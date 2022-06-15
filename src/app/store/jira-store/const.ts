export const JIRA_FEATURE_NAME = 'jira'

export interface JiraData {
    key: number,
    number: string,
    priority: string,
    status: string,
    time: string,
    title: string,
    user: string
}

export interface JiraState {
    loading: boolean;
    loaded: boolean;
    serverError: string;
    jiraData: JiraData[];
}

export interface JiraRequest {
    login: string,
    password: string,
    JiraNumbers: string[]
}
