import { Component, OnInit } from '@angular/core';
import { HttpWeatherService } from './http-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpWeatherService) {}

  partOfDay: string;

  ngOnInit() {
    this.http.getWeatherData().subscribe(data => {
      this.getPartOfDay(data);
    });
  }

  getPartOfDay(time) {
    const currentDate = new Date(time.dt * 1000);
    const currentHour = currentDate.getHours();
    if (currentHour >= 5 && currentHour <= 11) {
      this.partOfDay = 'morning';
    } else if (currentHour >= 12 && currentHour <= 22) {
      this.partOfDay =  'afternoon';
    } else {
      this.partOfDay =  'night';
    }
  }

  setBackground() {
    return `${this.partOfDay}-background`;
  }

}
