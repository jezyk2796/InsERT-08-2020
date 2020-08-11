import { Component, OnInit } from '@angular/core';
import { HttpWeatherService } from '../http-weather.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.scss']
})
export class WeatherWidgetMainComponent implements OnInit {

  constructor(private http: HttpWeatherService) {}

  weatherData: any;
  timeOfApiCall: number;

  ngOnInit(): void {
    this.http.getWeatherData().subscribe(data => {
      this.weatherData = data;
      this.timeOfApiCall = this.weatherData.dt * 1000;
    });

    this.getWeatherDataInterval();
  }

  getWeatherIcon(iconId: string): string {
    return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  }

  getTemperature(value: number): string {
    return (value - 273.15).toFixed(0);
  }

  refreshData(): void {
    this.http.getWeatherData().subscribe(data => {
      this.weatherData = data;
      this.timeOfApiCall = Date.now();
    });
  }

  getWeatherDataInterval(): void {
    const source = interval(300000);
    source.subscribe(() => {
      this.http.getWeatherData().subscribe(data => {
        this.weatherData = data;
        this.timeOfApiCall = Date.now();
      });
    });
  }
}
