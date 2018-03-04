import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {MAIN_CONF} from '../../config/main';
import {CurrentWeatherDataAction} from '../store/actions/current-weather-data-action';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app-store';
import {Weather} from '../adapters/i-weather';
import {WeatherConditionOpenWeatherMapAdapter} from '../adapters/open-weather-map.adapter';
import {ForecastWeatherDataAction} from '../store/actions/forcast-weather-data-action';
import {isNullOrUndefined} from 'util';

@Injectable()
export class WeatherService {
    private apiKey = MAIN_CONF.openWeatherApiKey;

    constructor(private http: HttpClient, private store: Store<AppState>) {
    }

    getCurrentWeather(location: string = 'maidstone') {
        let params = new HttpParams();
        params = params.append('q', location + ',uk');
        params = params.append('appid', this.apiKey);

        return this.http.get(MAIN_CONF.api_url + 'weather', {params: params}).map(
            (data) => {
                console.log('Handle error');
                const weatherData: Weather = new WeatherConditionOpenWeatherMapAdapter(data);
                this.store.dispatch(new CurrentWeatherDataAction(weatherData.getJson()));
            },
            (err) => {
                console.log('Handle error');
            }
        );
    }

    getForecast(location, numberOfDays = 5) {
        let params = new HttpParams(location);
        params = params.append('q', location + ',uk');
        params = params.append('appid', this.apiKey);

        return this.http.get(MAIN_CONF.api_url + 'forecast', {params: params}).map(
            (data) => {
                const weatherConditions: Array<Weather> = [];
                const days = [];
                if (isNullOrUndefined( data['list']) === false) {
                    Object.entries(data['list']).forEach(([key, weatherCondition]) => {
                        const weather = new WeatherConditionOpenWeatherMapAdapter(weatherCondition);
                        if (days.length < numberOfDays && (days.indexOf(weather.getJson().date.getDay()) < 0 && Number(key) !== 0) ) {
                            days.push(weather.getJson().date.getDay());
                            weatherConditions.push(weather.getJson());
                        }
                    });
                }
                this.store.dispatch(new ForecastWeatherDataAction(weatherConditions));
            },
            (err) => {
                console.log('Handle error');
            }
        );
    }
}
