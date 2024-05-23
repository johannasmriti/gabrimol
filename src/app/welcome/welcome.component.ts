import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
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
}
