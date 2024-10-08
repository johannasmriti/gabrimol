import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Service } from '../services/services';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-retrieve-plant-records',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatProgressSpinnerModule,
  ],
  templateUrl: './retrieve-plant-records.component.html',
  styleUrl: './retrieve-plant-records.component.css',
})
export class RetrievePlantRecordsComponent implements OnInit {
  public plantId!: string | null;
  plantData: any[] = [];
  public foundRow: any = null;
  loading = true;

  constructor(private route: ActivatedRoute, private Service: Service) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.plantId = params.get('plantId');
      console.log(this.plantId);
    });
    this.fetchData();
  }

  fetchData() {
    this.Service.fetchDataFromGoogleAppsScript().subscribe((data: any[]) => {
      this.plantData = data;
      console.log('Data: ' + JSON.stringify(this.plantData));
      if (this.plantData !== null) {
        console.log('Length: ' + this.plantData.length);
        for (let i = 0; i < this.plantData.length; i++) {
          const row = this.plantData[i];
          console.log('Row:', row.plantID?.toLowerCase(), this.plantId);
          if (row.plantID?.toLowerCase() === this.plantId?.toLowerCase()) {
            this.foundRow = this.plantData[i];
            break;
          }
        }
        if (this.foundRow) {
          console.log('Row found:', this.foundRow);
          this.updateGPSLocation(); // Update GPS location
        } else {
          console.log('Plant ID not found');
        }
      }
      this.loading = false;
    });
  }

  updateGPSLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log('Current GPS Position:', latitude, longitude);

          const gpsCoordinates = `${latitude},${longitude}`;

          if (this.foundRow) {
            this.foundRow.GPSCoordinate = gpsCoordinates;
            console.log('Updated Row with GPS:', this.foundRow);
    
            this.Service.sendDataToGoogleAppsScript(this.foundRow)
            .then((response) => {
              console.log('Update successful', response);
            })
            .catch((error) => {
              console.error('Update failed', error);
            });
          }
        },
        (error) => {
          console.error('Error getting GPS location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  onSubmit() {
    this.Service.sendDataToGoogleAppsScript(this.foundRow)
      .then((response) => {
        console.log('Update successful', response);
        alert('Update Successful!');
      })
      .catch((error) => {
        console.error('Update failed', error);
      });
  }
}
