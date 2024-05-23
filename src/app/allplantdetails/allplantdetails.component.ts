import { Component, OnInit } from '@angular/core';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { Service } from '../services/services';
import { GridApi, GridReadyEvent, ColDef } from 'ag-grid-community';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
// import '@ag-grid-community/styles/ag-grid.css';
// import '@ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-allplantdetails',
  standalone: true,
  imports: [
    AgGridAngular,
    AgGridModule,
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
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

  constructor(private service: Service) {}

  ngOnInit() {
    this.service.fetchDataFromGoogleAppsScript().subscribe((data: any[]) => {
      this.plantData = data;
    });
  }
}
