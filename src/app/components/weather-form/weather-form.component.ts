import {Component, OnDestroy, OnInit, Sanitizer} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {MatSnackBar} from '@angular/material';
import * as _ from 'lodash';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-weather-form',
    templateUrl: './weather-form.component.html',
    styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent implements OnInit, OnDestroy {
    location = '';
    showForm = false;
    subscriptions: Array<Subscription> = [];

    constructor(private weatherService: WeatherService, private snackBar: MatSnackBar, private sanitizer: Sanitizer) {}

    ngOnInit() {
        setTimeout(() => {
            this.showForm = true;
        }, 600);
    }

    submit(location) {
        if (location !== '') {
            const getWeatherSubscription = this.weatherService.getCurrentWeather(location).subscribe(
                (data) => {
                    return true;
                },
                (err) => {
                    console.log('Sorry something went wrong with current weather');
                }
            );
            const getForcastSubscription = this.weatherService.getForecast(location).subscribe(
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
            this.subscriptions.push(getForcastSubscription, getForcastSubscription);
        }
    }

    ngOnDestroy() {
        for (const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }

}
