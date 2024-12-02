import { CommonModule } from '@angular/common';
import {Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  translate: TranslateService = inject(TranslateService);
  currentLang = localStorage.getItem('lang') ?? this.translate.currentLang;
  languageService = inject(LanguageService);
  private readonly router = inject(Router);

  constructor() {
    this.translate.use(this.currentLang);
  }

  translateText() {
    const newLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.translate.use(newLang);
    this.currentLang = newLang;
    this.languageService.changeLanguage(newLang); 
  }

  isDropdownLinkActive(): boolean {
    const currentUrl = this.router.url;
    return currentUrl.startsWith('/about-us') || currentUrl.startsWith('/management-team') || currentUrl.startsWith('/saudization-training') || currentUrl.startsWith('/social-responsibilities');
  }
}
