import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app-store';
import {WeatherCondition, WeatherData} from '../../models/weather-condition';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  currentWeather: WeatherCondition = null;
  state = 'small';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe((appStore) => {
      const currentWeather: WeatherData = appStore['store']['dataStore']['currentWeather'];
      this.currentWeather = new WeatherCondition(currentWeather);
      console.log(appStore);
    });
  }
}
