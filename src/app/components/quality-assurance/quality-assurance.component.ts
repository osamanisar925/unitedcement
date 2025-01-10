import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DocumentViewerModalComponent } from '../../shared/modals/document-viewer-modal/document-viewer-modal.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-quality-assurance',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './quality-assurance.component.html',
  styleUrl: './quality-assurance.component.scss'
})
export class QualityAssuranceComponent {
  private readonly modalService = inject(NgbModal);
  
  cards = [
    {
      header: 'رخصة بيئة التشغيل ( استغلال خلم الرخام )',
      imageUrl: 'assets/images/quality-assurance/certificate_5.jpg'
    },
    {
      header: 'رخصة بيئة للتشغيل ( انتاج مادة الاسمنت )',
      imageUrl: 'assets/images/quality-assurance/certificate_6.jpg'
    },
    {
      header: 'شهادة الايزو 2015-9001',
      imageUrl: 'assets/images/quality-assurance/certificate_7.jpg'
    },
    {
      header: 'شهادة الايزو 2015-9001',
      imageUrl: 'assets/images/quality-assurance/certificate_8.jpg'
    },
    {
      header: 'شهادة الايزو 2015-14001',
      imageUrl: 'assets/images/quality-assurance/certificate_9.jpg'
    },
    {
      header: 'شهادة التامينات الاجتماعيه',
      imageUrl: 'assets/images/quality-assurance/certificate_10.jpg'
    },
    {
      header: 'شهادة ترخيص استعمال علامة الجودة SASO GSO 1914-2009 ( الاسمنت البوتلاني البوزلاني )',
      imageUrl: 'assets/images/quality-assurance/certificate_11.jpg'
    },
    {
      header: 'شهادة ترخيص استعمال علامة الجودة SASO GSO 1914-2009 ( الاسمنت البورتلاني العادي )',
      imageUrl: 'assets/images/quality-assurance/certificate_12.jpg'
    },
    {
      header: 'شهادة ترخيص استعمال علامة الجودة SASO GSO 1914-2009 (الاسمنت البوتلاني المقاوم للكبريتات )',
      imageUrl: 'assets/images/quality-assurance/certificate_13.jpg'
    },
    {
      header: 'شهادة ممارسة اجهزة القياس النووية',
      imageUrl: 'assets/images/quality-assurance/certificate_14.jpg'
    },
    {
      header: 'Management system as per EN ISO 9001:2015',
      imageUrl: 'assets/images/quality-assurance/certificate_15.jpg'
    },
    {
      header: 'Management system as per EN ISO 14001:2015',
      imageUrl: 'assets/images/quality-assurance/certificate_16.jpg'
    },
    {
      header: 'Management system as per EN ISO 45001:2018',
      imageUrl: 'assets/images/quality-assurance/certificate_17.jpg'
    },
    {
      header: 'License for use of the quality mark',
      imageUrl: 'assets/images/quality-assurance/certificate_18.jpg'
    },
    {
      header: 'Apendix (License for use of the quality mark)',
      imageUrl: 'assets/images/quality-assurance/certificate_19.jpg'
    }
  ];

  openDocumentViewerModal(imgSrc: string, heading: string) {
    const modalRef = this.modalService.open(DocumentViewerModalComponent, { size: 'lg', centered: true, backdrop: true, keyboard: true });
    modalRef.componentInstance.imgSrc = imgSrc;
    modalRef.componentInstance.heading = heading;
  }
  
}
