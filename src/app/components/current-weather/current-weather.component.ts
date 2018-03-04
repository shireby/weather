import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app-store';
import {WeatherCondition, WeatherData} from '../../models/weather-condition';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-current-weather',
    templateUrl: './current-weather.component.html',
    styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit, OnDestroy {
    currentWeather: WeatherCondition = null;
    state = 'small';
    subscriptions: Array<Subscription> = [];

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        const storeSubscription = this.store.subscribe((appStore) => {
            const currentWeather: WeatherData = appStore['store']['dataStore']['currentWeather'];
            this.currentWeather = new WeatherCondition(currentWeather);
            console.log(appStore);
        });

        this.subscriptions.push(storeSubscription);

    }

    ngOnDestroy() {
        for (const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }
}
