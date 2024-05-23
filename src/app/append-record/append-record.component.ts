import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Service } from '../services/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-append-record',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './append-record.component.html',
  styleUrl: './append-record.component.css',
})
export class AppendRecordComponent {
  newRecord: any = {
    Date: '',
    PlantName: '',
    Age: '',
    Segment: '',
    TerraceID: '',
    GPSCoordinate: '',
    ToBeFertilised: '',
    ToBeWatered: '',
    ToBeCleaned: '',
    FruitingStage: '',
    Remarks: '',
  };

  constructor(private service: Service) {}

  ngOnInit() {
    this.newRecord.Date = new Date().toISOString().split('T')[0];
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.newRecord.GPSCoordinate = `${position.coords.latitude},${position.coords.longitude}`;
        },
        (error) => {
          console.error('Error getting location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  onSubmit() {
    this.service
      .sendDataToGoogleAppsScript(this.newRecord)
      .then((response) => {
        console.log('Record added successfully', response);
        alert(response);
      })
      .catch((error) => {
        console.error('Failed to add record', error);
      });
  }
}
