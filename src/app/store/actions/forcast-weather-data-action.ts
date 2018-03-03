import {CustomAction} from './custom-action';

export const FORECAST_WEATHER_DATA_ACTION = 'FORECAST_WEATHER_DATA_ACTION';

export class ForecastWeatherDataAction implements CustomAction {
    readonly type: string = FORECAST_WEATHER_DATA_ACTION;
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
