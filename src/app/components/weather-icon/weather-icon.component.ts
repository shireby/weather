import {Component, Input, OnInit} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})
export class WeatherIconComponent implements OnInit {

  @Input()  set weather(weather: string) {
    if (isNullOrUndefined(weather) === false) {
      this.weatherIconClass =  weather.toLowerCase();
    }
  }
  weatherIconClass = '';

  constructor() { }

  ngOnInit() {
  }

}
