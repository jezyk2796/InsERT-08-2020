import { Component, OnInit } from '@angular/core';
import { HttpWeatherService } from '../http-weather.service';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.scss']
})
export class WeatherWidgetMainComponent implements OnInit {

  constructor(private http: HttpWeatherService) {}

  date: number;
  weatherData: any;

  ngOnInit() {
    this.http.getWeatherData().subscribe(data => this.weatherData = data);
  }

  // getWeatherData() {
  //   fetch(this.apiCall)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data); // to delete
  //
  //       this.date = data.dt * 1000;
  //     });
  // }
}
