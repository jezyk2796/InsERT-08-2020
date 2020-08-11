import { Component, OnInit } from '@angular/core';
import { HttpWeatherService } from '../http-weather.service';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.scss']
})
export class WeatherWidgetMainComponent implements OnInit {

  constructor(private http: HttpWeatherService) {}

  weatherData;
  timeOfApiCall;

  ngOnInit() {
    this.http.getWeatherData().subscribe(data => {
      this.weatherData = data;
      this.timeOfApiCall = this.weatherData.dt * 1000;
    });
  }

  getWeatherIcon(iconId) {
    return `http://openweathermap.org/img/wn/${iconId}@2x.png`;
  }

  getTemperature(value) {
    return (value - 273.15).toFixed(0);
  }

  refreshData() {
    this.http.getWeatherData().subscribe(data => {
      this.weatherData = data;
      this.timeOfApiCall = Date.now();
    });
  }
}
