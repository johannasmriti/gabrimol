import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { Service } from '../services/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-retrieve-plant-records',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './retrieve-plant-records.component.html',
  styleUrl: './retrieve-plant-records.component.css',
})
export class RetrievePlantRecordsComponent {
  public plantId!: string | null;
  plantData: any[] = [];
  public foundRow: any = null;

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
      console.log('Data: ' + data);
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
        } else {
          console.log('Plant ID not found');
        }
      }
    });
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
