import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpWeatherService {

  private weatherLocation = 'wroclaw';
  private apiKey = '945a05b7b60aff343b86c6ec33f4afd3';
  private url = `http://api.openweathermap.org/data/2.5/weather?q=${this.weatherLocation}&appid=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<object> {
    return this.http.get(this.url);
  }
}
