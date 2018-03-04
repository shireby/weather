import {Component, Input, OnInit} from '@angular/core';
import {isNullOrUndefined} from 'util';

const DEFAULT_WEATEHR = 'cloud';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})
export class WeatherIconComponent implements OnInit {
  @Input() size = 'full'
  iconClassMappingDay = {
    cloud: 'wi-day-cloudy',
    clear: 'wi-day-sunny',
    rain: 'wi-day-rain'
  };

  @Input()  set weather(weather: string) {
    if (isNullOrUndefined(weather) === false) {
      this.weatherIconClass =  weather.toLowerCase();
    }
  }
  weatherIconClass = '';

  constructor() { }

  getWeatherIcon(weather) {
    if (isNullOrUndefined(this.iconClassMappingDay[weather]) === false) {
      return this.iconClassMappingDay[weather];
    }

    return this.iconClassMappingDay[DEFAULT_WEATEHR];
  }

  ngOnInit() {
  }

}
