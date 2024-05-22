import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //   private apiUrl =
  //     'https://docs.google.com/spreadsheets/d/1h2p5FGEFqpyObmV65tVYJdIdmcmUq7hLoRniQ0kFImk/edit#gid=1067277837';

  private readonly apiUrl =
    'https://sheets.googleapis.com/v4/spreadsheets/1h2p5FGEFqpyObmV65tVYJdIdmcmUq7hLoRniQ0kFImk?includeGridData=true&key=AIzaSyDigpkDoEzWWVHC5ekDx9zUWMEI_sG1F8Y';
  constructor(private http: HttpClient) {}

  getSheetData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  submitForm(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, formData);
  }

  retrieveRecord(plantID: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?plantId=${plantID}`);
  }

  updateRecord(recordId: string, data: any): Observable<any> {
    // Assuming you have an endpoint for updating records, replace 'updateEndpoint' with the actual endpoint
    const updateEndpoint = `${this.apiUrl}/${recordId}`;
    return this.http.put<any>(updateEndpoint, data);
  }

  createRecord(data: any): Observable<any> {
    // Assuming you have an endpoint for creating records, replace 'createEndpoint' with the actual endpoint
    const createEndpoint = `${this.apiUrl}`;
    return this.http.post<any>(createEndpoint, data);
  }
}
