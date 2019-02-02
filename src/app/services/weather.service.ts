import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
  appId = '96c20bd7450059c8d1ba71d6a7dc73a4';

  constructor(private http: HttpClient) { }

  getWeather(query: string) {
    return this.http.get(this.weatherUrl + '?q=' + query +
      '&appid=' + this.appId);
  }
}
