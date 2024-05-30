import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  plantId: string = '';
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  isNavbarHidden: boolean = false;
  lastScrollTop = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    this.isNavbarHidden =
      currentScroll > this.lastScrollTop && currentScroll > 50;
    this.lastScrollTop = currentScroll;
  }

  constructor(private router: Router) {}

  searchPlant() {
    if (this.plantId) {
      const plantId = this.plantId;
      this.plantId = '';
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([`/plant/${plantId}`]);
      });
    }
  }
}
