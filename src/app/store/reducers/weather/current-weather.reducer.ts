import {AppState} from '../../app-store';
import {CustomAction} from '../../actions/custom-action';

export function currentWeatherReducer(state: AppState, action: CustomAction): AppState {
    const newState: AppState = Object.assign({}, state);
    newState.dataStore.currentWeather = action.payload;
    return newState;
}
