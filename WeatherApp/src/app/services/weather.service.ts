import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string){
    this.http.get(environment.weatherApiBaseUrl,{
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostLabel,environment.XRapidAPIKeyHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
      params:new HttpParams()
      .set('q',cityName)
      .set('units','metric')
      .set('mode','json')
      })
  }
}
