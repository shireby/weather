import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';

@Component({
    selector: 'app-weather-form',
    templateUrl: './weather-form.component.html',
    styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent implements OnInit {
    constructor(private weatherService: WeatherService) {}
    location = '';
    showForm = false;
    ngOnInit() {
        setTimeout(() => {
            this.showForm = true;
        }, 600);
    }

    submit(location) {
        if (location !== '') {
            this.weatherService.getCurrentWeather(location).subscribe(
                (data) => {
                    return true;
                },
                (err) => {
                    console.log('Sorry something went wrong with current weather');
                }
            );
            this.weatherService.getForecast(location).subscribe(
                (data) => {
                    return true;
                },
                (err) => {
                    console.log('Sorry something went wrong with get Forecast', err);
                }
            );
        }
    }

}
