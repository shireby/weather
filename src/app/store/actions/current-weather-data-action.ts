import {CustomAction} from './custom-action';

export const CURRENT_WEATHER_DATA_ACTION = 'CURRENT_WEATHER_DATA_ACTION';

export class CurrentWeatherDataAction implements CustomAction {
    readonly type: string = CURRENT_WEATHER_DATA_ACTION;
    protected _payload;

    constructor(payload) {
        this._payload = payload;
    }

    set payload(payload) {
        this._payload = payload;
    }

    get payload() {
        return this._payload;
    }
}
