import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

const routes = [
  { path: '', component: WeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
