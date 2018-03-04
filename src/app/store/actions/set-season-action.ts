import {CustomAction} from './custom-action';

export const SET_SEASON_ACTION = 'SET_SEASON_ACTION';

export class SetSeasonAction implements CustomAction {
    readonly type: string = SET_SEASON_ACTION;
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
