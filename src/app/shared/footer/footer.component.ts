import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ComingSoonComponent } from '../../components/coming-soon/coming-soon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentLang = localStorage.getItem('lang');

    private readonly modalService = inject(NgbModal)

  openComingSoon(heading: string) {
    const modalRef = this.modalService.open(ComingSoonComponent, { size: 'xl', centered: true, backdrop: true, keyboard: true });
    modalRef.componentInstance.heading = heading;
  }

}
