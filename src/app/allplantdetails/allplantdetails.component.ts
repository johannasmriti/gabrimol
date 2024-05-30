import { Component } from '@angular/core';
import { Service } from '../services/services';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-allplantdetails',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './allplantdetails.component.html',
  styleUrl: './allplantdetails.component.css',
})
export class AllplantdetailsComponent {
  displayedColumns: string[] = [
    'Date',
    'plantID',
    'PlantName',
    'Age',
    'Segment',
    'TerraceID',
    'GPSCoordinate',
    'ToBeFertilised',
    'ToBeWatered',
    'ToBeCleaned',
    'FruitingStage',
    'Remarks',
  ];
  plantData: any[] = [];
  loading = true;

  constructor(private service: Service) {}

  ngOnInit() {
    this.service.fetchDataFromGoogleAppsScript().subscribe((data: any[]) => {
      this.plantData = data;
      this.loading = false;
    });
  }
}
