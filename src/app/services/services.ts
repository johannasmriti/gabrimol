import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, map } from 'rxjs';
import axios, { AxiosRequestConfig } from 'axios';
import * as followRedirects from 'follow-redirects';

// Assign follow-redirects to axios
// followRedirects.attach(axios);

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}
  fetchDataFromGoogleAppsScript(): Observable<any> {
    const url =
      'https://script.google.com/macros/s/AKfycbzRZ9MVuApn5ZoUNQ-BfUaioOWRycD0NMib-j7Rg9NzBVld-5J5v3XKvm49Y37KakHO/exec';
    return from(axios.get(url)).pipe(
      map((response: { data: any }) => response.data)
    );
  }

  sendDataToGoogleAppsScript(data: any): Promise<any> {
    const url =
      'https://script.google.com/macros/s/AKfycbzRZ9MVuApn5ZoUNQ-BfUaioOWRycD0NMib-j7Rg9NzBVld-5J5v3XKvm49Y37KakHO/exec';
    return fetch(url, {
      redirect: 'follow',
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
    }).then((response) => response.text());
  }
}
