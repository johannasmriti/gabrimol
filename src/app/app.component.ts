import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RetrievePlantRecordsComponent } from './retrieve-plant-records/retrieve-plant-records.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AllplantdetailsComponent } from './allplantdetails/allplantdetails.component';
import { AppendRecordComponent } from './append-record/append-record.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    WelcomeComponent,
    RetrievePlantRecordsComponent,
    FooterComponent,
    AllplantdetailsComponent,
    AppendRecordComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gabrimol-app';
}
