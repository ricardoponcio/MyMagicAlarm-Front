import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  postWithoutBody = (url: string): Promise<any> => {
    return this.post(url, undefined);
  };

  post = (url: string, payload: any | undefined): Promise<any> => {
    // console.log('Enviando');
    // console.log(payload);
    return new Promise((resolve, reject) => {
      this.http
        .post<any>(environment.baseUrl + url, payload)
        .toPromise()
        .then((data: any) => {
          // console.log('Recebendo');
          // console.log(data);
          if (data) {
            resolve(data);
          } else {
            reject("Data empty!");
          }
        })
        .catch((error) => {
          // console.log(error);
          reject(error);
        });
    });
  };

  getWithoutQuery = (url: string): Promise<any> => {
    return this.get(url, undefined);
  };

  get = (url: string, queryParams: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      this.http
        .get<any>(environment.baseUrl + url, {
          headers: {
            "access-control-allow-origin": "*",
          },
          params: queryParams,
        })
        .toPromise()
        .then((data: any) => {
          if (data) {
            resolve(data);
          } else {
            reject("Data empty!");
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}
