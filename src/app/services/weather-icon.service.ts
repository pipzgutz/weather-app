import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherIconService {
  weatherIconUrl = 'https://openweathermap.org/img/w/';

  getWeatherIcon(iconName: string) {
    return this.weatherIconUrl + iconName + '.png';
  }
}
