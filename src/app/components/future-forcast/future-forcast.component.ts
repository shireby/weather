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
    forecast: Array<WeatherCondition> = [];

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.store.subscribe((appStore) => {
            this.forecast = [];
            const forecastWeather = appStore['store']['dataStore']['forecastWeather'];
            for (const weather of forecastWeather) {
                this.forecast.push(new WeatherCondition(weather));
            }
        });
    }

}
