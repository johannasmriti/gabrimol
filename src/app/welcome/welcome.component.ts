import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  onScroll(event: any) {
    console.log('Scrolling...', event.target.scrollTop);
    const scrollTop = event.target.scrollTop;
    const parallaxImage = document.querySelector(
      '.parallax-image'
    ) as HTMLElement;
    parallaxImage.style.backgroundPositionY = `${scrollTop * 0.4}px`;
  }

  widgets = [
    { title: 'View All Records', background: '././assets/Gaby.jpg' },
    { title: 'Modify Records', background: '../../assets/Gaby.jpg' },
    { title: 'Append Records', background: '../../assets/Gaby.jpg' },
    { title: 'Search via Plant ID', background: '../../assets/Gaby.jpg' },
  ];

  navigateToModifyRecords() {
    const plantId = prompt(
      'Provide Plant ID for the plant record you want to modify:'
    );

    if (plantId) {
      this.router.navigate([`/plant/${plantId}`]);
    }
  }

  navigateToSearch() {
    const plantId = prompt(
      'Provide Plant ID for the plant record you want to search:'
    );

    if (plantId) {
      this.router.navigate([`/plant/${plantId}`]);
    }
  }
}
