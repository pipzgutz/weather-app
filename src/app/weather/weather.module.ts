import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule
  ],
  exports: [WeatherComponent]
})
export class WeatherModule { }
