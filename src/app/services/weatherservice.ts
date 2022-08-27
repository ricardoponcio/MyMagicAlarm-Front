import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpService: HttpService) {}

  readCurrentWeather = (location: string) => {
    this.httpService.get('/v4/timelines', {
      location: location,
      apiKey: environment.apiKey,
      units: 'metric',
      startTime: 'now',
      endTime: 'nowPlus4h',
      timezone: 'America/Sao_Paulo',
      fields: [
        'temperature',
        'precipitationProbability',
        'humidity',
        'temperatureApparent',
        'weatherCode',
      ],
    });
  };

  readTest = () => {
    return {
      data: {
        timelines: [
          {
            timestep: '1h',
            endTime: '2022-08-28T13:00:00-03:00',
            startTime: '2022-08-27T13:00:00-03:00',
            intervals: [
              {
                startTime: '2022-08-27T13:00:00-03:00',
                values: {
                  humidity: 36,
                  precipitationProbability: 0,
                  temperature: 25.19,
                  temperatureApparent: 25.19,
                  weatherCode: 1100,
                },
              },
              {
                startTime: '2022-08-27T14:00:00-03:00',
                values: {
                  humidity: 39,
                  precipitationProbability: 0,
                  temperature: 25.81,
                  temperatureApparent: 25.81,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-27T15:00:00-03:00',
                values: {
                  humidity: 35,
                  precipitationProbability: 0,
                  temperature: 26.31,
                  temperatureApparent: 26.31,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-27T16:00:00-03:00',
                values: {
                  humidity: 31,
                  precipitationProbability: 0,
                  temperature: 26.38,
                  temperatureApparent: 26.38,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-27T17:00:00-03:00',
                values: {
                  humidity: 33,
                  precipitationProbability: 0,
                  temperature: 25.69,
                  temperatureApparent: 25.69,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-27T18:00:00-03:00',
                values: {
                  humidity: 38,
                  precipitationProbability: 0,
                  temperature: 24.38,
                  temperatureApparent: 24.38,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-27T19:00:00-03:00',
                values: {
                  humidity: 44,
                  precipitationProbability: 0,
                  temperature: 23.31,
                  temperatureApparent: 23.31,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-27T20:00:00-03:00',
                values: {
                  humidity: 50,
                  precipitationProbability: 0,
                  temperature: 22,
                  temperatureApparent: 22,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-27T21:00:00-03:00',
                values: {
                  humidity: 54,
                  precipitationProbability: 0,
                  temperature: 20.88,
                  temperatureApparent: 20.88,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-27T22:00:00-03:00',
                values: {
                  humidity: 58,
                  precipitationProbability: 0,
                  temperature: 19.88,
                  temperatureApparent: 19.88,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-27T23:00:00-03:00',
                values: {
                  humidity: 60,
                  precipitationProbability: 0,
                  temperature: 19.31,
                  temperatureApparent: 19.31,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-28T00:00:00-03:00',
                values: {
                  humidity: 62,
                  precipitationProbability: 0,
                  temperature: 18.69,
                  temperatureApparent: 18.69,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-28T01:00:00-03:00',
                values: {
                  humidity: 60,
                  precipitationProbability: 0,
                  temperature: 18.19,
                  temperatureApparent: 18.19,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-28T02:00:00-03:00',
                values: {
                  humidity: 60,
                  precipitationProbability: 0,
                  temperature: 17.81,
                  temperatureApparent: 17.81,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-28T03:00:00-03:00',
                values: {
                  humidity: 60,
                  precipitationProbability: 0,
                  temperature: 17.19,
                  temperatureApparent: 17.19,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-28T04:00:00-03:00',
                values: {
                  humidity: 62,
                  precipitationProbability: 0,
                  temperature: 16.69,
                  temperatureApparent: 16.69,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-28T05:00:00-03:00',
                values: {
                  humidity: 62,
                  precipitationProbability: 0,
                  temperature: 16.19,
                  temperatureApparent: 16.19,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-28T06:00:00-03:00',
                values: {
                  humidity: 61,
                  precipitationProbability: 0,
                  temperature: 16.13,
                  temperatureApparent: 16.13,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-28T07:00:00-03:00',
                values: {
                  humidity: 56,
                  precipitationProbability: 0,
                  temperature: 16.69,
                  temperatureApparent: 16.69,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-28T08:00:00-03:00',
                values: {
                  humidity: 63,
                  precipitationProbability: 0,
                  temperature: 17.19,
                  temperatureApparent: 17.19,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-28T09:00:00-03:00',
                values: {
                  humidity: 66,
                  precipitationProbability: 0,
                  temperature: 18.19,
                  temperatureApparent: 18.19,
                  weatherCode: 1000,
                },
              },
              {
                startTime: '2022-08-28T10:00:00-03:00',
                values: {
                  humidity: 64,
                  precipitationProbability: 0,
                  temperature: 19.13,
                  temperatureApparent: 19.13,
                  weatherCode: 1100,
                },
              },
              {
                startTime: '2022-08-28T11:00:00-03:00',
                values: {
                  humidity: 61,
                  precipitationProbability: 0,
                  temperature: 19.88,
                  temperatureApparent: 19.88,
                  weatherCode: 1100,
                },
              },
              {
                startTime: '2022-08-28T12:00:00-03:00',
                values: {
                  humidity: 66,
                  precipitationProbability: 0,
                  temperature: 19.13,
                  temperatureApparent: 19.13,
                  weatherCode: 1100,
                },
              },
              {
                startTime: '2022-08-28T13:00:00-03:00',
                values: {
                  humidity: 65,
                  precipitationProbability: 0,
                  temperature: 19.5,
                  temperatureApparent: 19.5,
                  weatherCode: 1001,
                },
              },
            ],
          },
        ],
      },
    };
  };
}
