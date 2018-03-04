import {Component, Input, OnInit} from '@angular/core';
import {WeatherCondition} from '../../models/weather-condition';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  animations: [
    trigger('adjustSize', [
      state('standard', style({
        transform: 'scale(1)',
      })),
      state('small', style({
        transform: 'scale(.2)',
      })),
      transition('* => *', animate('300ms ease-in')),
    ])
  ]
})
export class WeatherCardComponent implements OnInit {
  state = 'standard';
  @Input() weatherCondition: WeatherCondition = null;
  @Input() title = '';
  @Input() size = 'full';

  constructor() { }

  ngOnInit() {

  }


  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
