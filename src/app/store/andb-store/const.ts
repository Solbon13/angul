export const ANDB_FULL_FEATURE_NAME = 'andb full'
export const ANDB_ASSIGN_FEATURE_NAME = 'andb ASSIGN'
export const ANDB_REG_FEATURE_NAME = 'andb REG'
export const ANDB_AGREGATOR_FEATURE_NAME = 'andb AGREGATOR'
export const ANDB_PTK_FEATURE_NAME = 'andb PTK'
export const ANDB_STATEMENT_LINK_FEATURE_NAME = 'andb STATEMENT LINK'

export interface andbAssignData {
}

export interface andbRegData {
}

export interface andbPTKData {
}

export interface andbAgregatorData {
}

export interface andbAgregatorHistoryData {
}

export interface andbStatementLinkData {
}

export interface AndbFullState {
    loadingAndbFull: boolean;
    loadedAndbFull: boolean;
    serverErrorAndbFull: string;
    andbAssignFullData: andbAssignData[];
    andbRegFullData: andbRegData[];
    andbAgregatorFullData: andbAgregatorData[];
    andbAgregatorFullHistoryData: andbAgregatorHistoryData[];
    andbPTKFullData: andbPTKData[];
    andbStatementLinkFullData: andbStatementLinkData[];
}

export interface AgregatorAndbState {
    loadingAgregatorAndb: boolean;
    loadedAgregatorAndb: boolean;
    serverErrorAgregatorAndb: string;
    andbAgregatorData: andbAgregatorData[];
    andbAgregatorHistoryData: andbAgregatorHistoryData[];
}

export interface AssignAndbState {
    loadingAssignAndb: boolean;
    loadedAssignAndb: boolean;
    serverErrorAssignAndb: string;
    andbAssignData: andbAssignData[];
}

export interface PtkAndbState {
    loadingPtkAndb: boolean;
    loadedPtkAndb: boolean;
    serverErrorPtkAndb: string;
    andbPTKData: andbPTKData[];
}

export interface RegAndbState {
    loadingRegAndb: boolean;
    loadedRegAndb: boolean;
    serverErrorRegAndb: string;
    andbRegData: andbRegData[];
}

export interface StatementLinkAndbState {
    loadingStatementLinkAndb: boolean;
    loadedStatementLinkAndb: boolean;
    serverErrorStatementLinkAndb: string;
    andbStatementLinkData: andbStatementLinkData[];
}
