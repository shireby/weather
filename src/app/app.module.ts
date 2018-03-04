import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatGridListModule, MatInputModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {dataStoreReducer} from './store/reducers/app-reducer';
import {HttpClientModule} from '@angular/common/http';
import {WeatherService} from './services/weather.service';
import {WeatherFormComponent} from './components/weather-form/weather-form.component';
import {FormsModule} from '@angular/forms';
import {WeatherIconComponent} from './components/weather-icon/weather-icon.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { WeatherPanelComponent } from './components/weather-panel/weather-panel.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { TemperaturePipe } from './pipe/temperature.pipe';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { FutureForecastComponent } from './components/future-forcast/future-forcast.component';

@NgModule({
    declarations: [
        AppComponent,
        WeatherFormComponent,
        WeatherIconComponent,
        CurrentWeatherComponent,
        WeatherPanelComponent,
        TemperaturePipe,
        WeatherCardComponent,
        FutureForecastComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        HttpClientModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        AngularFontAwesomeModule,
        StoreModule.forRoot({
            store: dataStoreReducer
        }),
        MatSnackBarModule
    ],
    bootstrap: [AppComponent],
    providers: [WeatherService]
})
export class AppModule {
    constructor() {

    }
}
