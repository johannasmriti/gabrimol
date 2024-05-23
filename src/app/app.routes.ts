import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RetrievePlantRecordsComponent } from './retrieve-plant-records/retrieve-plant-records.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'plant', component: RetrievePlantRecordsComponent },
  { path: 'plant/:plantId', component: RetrievePlantRecordsComponent },
  // { path: 'all-plant-details', component: AllPlantDetailsComponent },
  // { path: 'gaby-gallery', component: GabyGalleryComponent },
  // { path: 'append-plant', component: AppendPlantComponent },
];
