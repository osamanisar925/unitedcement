import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  translate: TranslateService = inject(TranslateService);
  cdr = inject(ChangeDetectorRef)
  currentLang = localStorage.getItem('lang') || this.translate.currentLang;

  constructor() {
    this.translate.use(this.currentLang);
  }

  translateText() {
    const newLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.translate.use(newLang);
    this.currentLang = newLang;
    localStorage.setItem('lang', newLang);
    this.cdr.detectChanges();
    window.location.reload();
  }

}
