import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app-store';

@Component({
    selector: 'app-weather-panel',
    templateUrl: './weather-panel.component.html',
    styleUrls: ['./weather-panel.component.scss'],
    animations: [
        trigger('togglePanel', [
            state('close', style({
                marginBottom: '-1000px',
            })),
            state('open', style({
                marginBottom: '0',
            })),
            transition('* => *', animate('300ms ease-in')),
        ]),
    ]
})
export class WeatherPanelComponent implements OnInit {

    panelState = 'close';

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.store.subscribe((appStore) => {
            if (Object.keys(appStore['store']['dataStore']['currentWeather']).length > 0) {
                this.panelState = 'open';
            }
        });
    }

    togglePanel() {
        console.log('Toggle');
        this.panelState = (this.panelState === 'close' ? 'open' : 'close');
    }
}
