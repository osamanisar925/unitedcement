import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-document-viewer-modal',
  standalone: true,
  imports: [],
  templateUrl: './document-viewer-modal.component.html',
  styleUrl: './document-viewer-modal.component.scss'
})
export class DocumentViewerModalComponent {
  private readonly activeModal = inject(NgbActiveModal)
  imgSrc: string = '';
  heading: string = '';


  closeModal(){
    this.activeModal.close();
  }
}
