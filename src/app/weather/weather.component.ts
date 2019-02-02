import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather } from './weather';
import { WeatherIconService } from '../services/weather-icon.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city = 'Manila';
  weather: Weather;

  constructor(private weatherService: WeatherService,
    private weatherIconService: WeatherIconService) { }

  ngOnInit() {
    this.loadWeather();
  }

  loadWeather() {
    this.weatherService.getWeather(this.city)
      .subscribe((data: any) => {
        console.log(data);
        this.weather = {
          clouds: data.weather[0].description,
          icon: this.weatherIconService.getWeatherIcon(data.weather[0].icon),
          wind: '',
          temperature: data.main.temp - 273.15
        };
      });
  }
}
