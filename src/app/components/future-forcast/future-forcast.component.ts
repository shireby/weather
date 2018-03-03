import {Component, OnInit} from '@angular/core';
import {WeatherCondition} from '../../models/weather-condition';
import {AppState} from '../../store/app-store';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-future-forecast',
    templateUrl: './future-forcast.component.html',
    styleUrls: ['./future-forcast.component.scss']
})
export class FutureForecastComponent implements OnInit {
    forcast: Array<WeatherCondition> = [];

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.store.subscribe((appStore) => {
            const forecastWeather = appStore['store']['dataStore']['forecastWeather'];
        });
    }

}
