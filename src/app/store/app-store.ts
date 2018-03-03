export interface AppState {
    uiStore: UiStore;
    dataStore: DataStore;
}

export interface UiStore {
    location: string;
}

export interface DataStore {
    currentWeather: Object;
    forecastWeather: Object;
}

export const INITIAL_APP_STATE: AppState = {
    uiStore: {
        location: null
    },
    dataStore: {
        currentWeather: {},
        forecastWeather: {}
    }
};
