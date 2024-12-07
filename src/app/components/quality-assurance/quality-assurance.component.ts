import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DocumentViewerModalComponent } from '../../shared/modals/document-viewer-modal/document-viewer-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quality-assurance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quality-assurance.component.html',
  styleUrl: './quality-assurance.component.scss'
})
export class QualityAssuranceComponent {
  private readonly modalService = inject(NgbModal);
  
  cards = [
    {
      header: 'الترخيص الصناعي وطني',
      imageUrl: 'assets/images/quality-assurance/certificate_1.jpg'
    },
    {
      header: 'السجل التجاري',
      imageUrl: 'assets/images/quality-assurance/certificate_2.jpg'
    },
    {
      header: 'تقييم الكيان ( نطاق الشركة )',
      imageUrl: 'assets/images/quality-assurance/certificate_3.jpg'
    },
    {
      header: 'تقييم الكيان ( نطاق الشركة )',
      imageUrl: 'assets/images/quality-assurance/certificate_4.jpg'
    },
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
    }
  ];

  openDocumentViewerModal(imgSrc: string, heading: string) {
    const modalRef = this.modalService.open(DocumentViewerModalComponent, { size: 'xl', centered: true, backdrop: true, keyboard: true });
    modalRef.componentInstance.imgSrc = imgSrc;
    modalRef.componentInstance.heading = heading;
  }
  
}
