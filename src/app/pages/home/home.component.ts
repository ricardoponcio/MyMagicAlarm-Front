
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weatherservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  currentWeather !: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.currentWeather = this.weatherService.readTest().data.timelines[0];
  }

  codeFromHour(day: any) {
    var hr = (new Date(day.startTime)).getHours();
    if (hr < 18) {
      return 0;
    }
    return 1;
  }

  temperatureAndAppearent(day: any) {
    if (day.values.temperature == day.values.temperatureApparent) {
      return day.values.temperature + ' ºC';
    }
    return day.values.temperature + ' ºC' + ' / ' + day.values.temperatureApparent + ' ºC';
  }

}
