import {Weather} from './i-weather';
import {WeatherData} from '../models/weather-condition';

export class WeatherConditionOpenWeatherMapAdapter implements Weather {
    protected _data;

    constructor(openWeatherMapData, type: string = null) {
        this._data = {
            temperature: this.convertToKelvinToCel(openWeatherMapData['main']['temp']),
            maxTemperature: this.convertToKelvinToCel(openWeatherMapData['main']['temp_max']),
            minTemperature: this.convertToKelvinToCel(openWeatherMapData['main']['temp_min']),
            main: openWeatherMapData['weather'][0]['main'],
            windSpeed: openWeatherMapData['wind']['speed'],
            desc: openWeatherMapData['weather'][0]['description'],
            date: new Date(openWeatherMapData['dt'] * 1000)
        };
    }

    protected convertToKelvinToCel(kelvenTemp: number) {
        return kelvenTemp - 273;
    }

    getJson() {
        return this._data;
    }
}
