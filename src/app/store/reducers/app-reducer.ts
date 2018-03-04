import {CustomAction} from '../actions/custom-action';
import {AppState, INITIAL_APP_STATE} from '../app-store';
import {currentWeatherReducer} from './weather/current-weather.reducer';
import {CURRENT_WEATHER_DATA_ACTION} from '../actions/current-weather-data-action';
import {FORECAST_WEATHER_DATA_ACTION} from '../actions/forcast-weather-data-action';
import {forecastWeatherReducer} from './weather/forecast-weather.reducer';
import {SET_SEASON_ACTION} from '../actions/set-season-action';
import {setSeasonReducer} from './weather/set-season-reducer';

export function dataStoreReducer(state: AppState = INITIAL_APP_STATE, action: CustomAction): AppState {
    switch (action.type) {
        case CURRENT_WEATHER_DATA_ACTION:
            return currentWeatherReducer(state, action);
        case FORECAST_WEATHER_DATA_ACTION:
            return forecastWeatherReducer(state, action);
        case SET_SEASON_ACTION:
            return setSeasonReducer(state, action);
        default:
            return state;
    }
}
