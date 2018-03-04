import {Component, OnInit, Sanitizer} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {MatSnackBar} from '@angular/material';
import * as _ from 'lodash';

@Component({
    selector: 'app-weather-form',
    templateUrl: './weather-form.component.html',
    styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent implements OnInit {
    location = '';
    showForm = false;

    constructor(private weatherService: WeatherService, private snackBar: MatSnackBar, private sanitizer: Sanitizer) {}

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
                (err: Response) => {
                    if (err.status === 404) {
                        const message = _.capitalize(location) + ' not found';
                        this.snackBar.open(message, 'Dismiss', {
                            duration: 2000
                        });
                    }
                    console.log('Sorry something went wrong with get Forecast');
                }
            );
        }
    }

}
