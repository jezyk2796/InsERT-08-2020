import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.scss']
})
export class WeatherWidgetMainComponent implements OnInit {

  apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=wroclaw&appid=945a05b7b60aff343b86c6ec33f4afd3';
  date;

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    fetch(this.apiCall)
      .then(response => response.json())
      .then(data => {
        console.log(data); // to delete

        this.date = data.dt * 1000;
        this.getPartOfDay(data.dt);
      });
  }

  getPartOfDay(time) {
    const currentDate = new Date(time * 1000);
    const currentHour = currentDate.getHours();
    if (currentHour >= 5 && currentHour <= 11) {
      return 'morning';
    } else if (currentHour >= 12 && currentHour <= 22) {
      return 'afternoon';
    } else {
      return 'night';
    }
  }
}
