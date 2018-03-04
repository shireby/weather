import {AppState} from '../../app-store';
import {CustomAction} from '../../actions/custom-action';

export function forecastWeatherReducer(state: AppState, action: CustomAction): AppState {
    const newState: AppState = Object.assign({}, state);
    newState.dataStore.forecastWeather = action.payload;
    return state;
}
