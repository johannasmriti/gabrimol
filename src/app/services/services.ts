import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, map } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class Service {
  scriptUrl =
    'https://script.google.com/macros/s/AKfycbyA7fC6YRh9GA-7jtLXiV9pwHWpzMZFyu2M5iUV-3013Cgl5K12mklIbScB1n82KTP3/exec';
  constructor(private http: HttpClient) {}
  fetchDataFromGoogleAppsScript(): Observable<any> {
    return from(axios.get(this.scriptUrl)).pipe(
      map((response: { data: any }) => response.data)
    );
  }

  sendDataToGoogleAppsScript(data: any): Promise<any> {
    return fetch(this.scriptUrl, {
      redirect: 'follow',
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
    }).then((response) => response.text());
  }
}
