import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, map } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class Service {
  scriptUrl =
    'https://script.google.com/macros/s/AKfycbzRZ9MVuApn5ZoUNQ-BfUaioOWRycD0NMib-j7Rg9NzBVld-5J5v3XKvm49Y37KakHO/exec';
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
