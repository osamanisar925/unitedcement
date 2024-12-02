import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { CommonModule } from '@angular/common';
import { LanguageService } from './shared/services/language/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'unitedcement';
  currentLang: string = localStorage.getItem('lang') ?? 'en';
  languageService = inject(LanguageService);

  constructor() {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang; // Update currentLang reactively
    });
  }
}
