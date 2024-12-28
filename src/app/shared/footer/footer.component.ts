import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ComingSoonComponent } from '../../components/coming-soon/coming-soon.component';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentLang: string = '';

  private readonly modalService = inject(NgbModal)
  languageService = inject(LanguageService);


  constructor() {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang; // Update currentLang reactively
    });
  }

  openComingSoon(heading: string) {
    const modalRef = this.modalService.open(ComingSoonComponent, { size: 'xl', centered: true, backdrop: true, keyboard: true });
    modalRef.componentInstance.heading = heading;
  }

}
