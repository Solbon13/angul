export const GOOGLE_FEATURE_NAME = 'google'

export interface GoogleData {
    '7': string;
    '8': string;
    'Дата Завершено': string;
    'Дата Создано': string;
    'Завершено': string;
    'Завершено СЕГОДНЯ': string;
    'Исполнитель': string;
    'Классификация': string;
    'Комментарий': string;
    'Приоритет': string;
    'Создано': string;
    'Создано СЕГОДНЯ': string;
    '№': string;
}

export interface GoogleState {
    loading: boolean;
    loaded: boolean;
    serverError: string;
    googleData: GoogleData[];
}
