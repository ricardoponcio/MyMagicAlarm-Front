import { Component, OnDestroy, OnInit } from "@angular/core";
import { WeatherService } from "src/app/services/weatherservice";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
})
export class HomeComponent implements OnInit, OnDestroy {
  currentWeather!: any;
  nowTime = new Date();
  intervalTime!: any;
  intervalWeather!: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.updateWeather();
    this.intervalTime = setInterval(() => {
      this.nowTime = new Date();
    }, 1000);
    this.intervalWeather = setInterval(() => {
      this.updateWeather();
    }, 60000);
  }

  updateWeather = () => {
    this.weatherService.readWeatherFromLocal().then((data: any) => {
      this.currentWeather = data.data.timelines[0];
    });
  };

  ngOnDestroy(): void {
    clearInterval(this.intervalWeather);
    clearInterval(this.intervalTime);
  }

  codeFromHour(day: any) {
    var hr = new Date(day.startTime).getHours();
    if (hr <= 18 && hr >= 6) {
      return 0;
    }
    return 1;
  }

  temperatureAndAppearent(day: any) {
    const actualTemp = day.values.temperature.toFixed();
    const apparentTemp = day.values.temperatureApparent.toFixed();
    if (actualTemp == apparentTemp) {
      return actualTemp + " ºC";
    }
    return actualTemp + " ºC / " + apparentTemp + " ºC";
  }

  now = () => {
    return new Date();
  };
}
