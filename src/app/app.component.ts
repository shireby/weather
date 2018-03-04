import {Component} from '@angular/core';
import {WeatherService} from './services/weather.service';
import {Store} from '@ngrx/store';
import {AppState} from './store/app-store';
import {SetSeasonAction} from './store/actions/set-season-action';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // winter collection 213162
    bgImageUrl = 'https://source.unsplash.com/collection/213162/1600x900';

    bgMap = {
        spring: '1343979',
        winter: '213162',
        summer: '149495',
        autumn: '1224961'
    }

    constructor(private store: Store<AppState>) {
        const season = this.getSeason();
        this.bgImageUrl = this.getSeasonBgImage(season);
        this.store.dispatch(new SetSeasonAction(season));
    }

    getSeasonBgImage(season: string) {
        const collectionId = this.bgMap[season];
        return 'https://source.unsplash.com/collection/' + collectionId + '/1600x900';
    }

    getSeason() {
        return ['winter', 'spring', 'summer', 'autumn'][Math.floor((new Date().getMonth() / 12 * 4)) % 4];
    }

}
