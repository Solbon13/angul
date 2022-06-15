export const GOOGLE_FEATURE_NAME = 'jira'

export interface GoogleData {
    key: number,
    number: string,
    priority: string,
    status: string,
    time: string,
    title: string,
    user: string
}

export interface GoogleState {
    loading: boolean;
    loaded: boolean;
    serverError: string;
    googleData: GoogleData[];
}

export interface GoogleRequest {
    login: string,
    password: string,
}
