import {AppState} from '../../app-store';
import {CustomAction} from '../../actions/custom-action';

export function setSeasonReducer(state: AppState, action: CustomAction): AppState {
    const newState: AppState = Object.assign({}, state);
    newState.dataStore.season = action.payload;
    return state;
}
