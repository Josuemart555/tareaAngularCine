import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  isBrowser: boolean = false;

  counstructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    if (!this.isBrowser) return;
    // Integración con la lógica de Vuexy (app-menu.js usa .modern-nav-toggle y body classes)
    const body = document.body;
    // Alterna clases típicas del layout vertical de Vuexy
    if (body.classList.contains('menu-collapsed')) {
      body.classList.remove('menu-collapsed');
      body.classList.add('menu-expanded');
    } else {
      body.classList.remove('menu-expanded');
      body.classList.add('menu-collapsed');
    }

    // Disparar evento click en elementos que Vuexy escucha
    const togglers = document.querySelectorAll('.modern-nav-toggle');
    togglers.forEach((el) => (el as HTMLElement).classList.toggle('active'));
  }

}
