import { Component } from '@angular/core';

@Component({
  selector: 'app-document-viewer-modal',
  standalone: true,
  imports: [],
  templateUrl: './document-viewer-modal.component.html',
  styleUrl: './document-viewer-modal.component.scss'
})
export class DocumentViewerModalComponent {
  imgSrc: string = '';
}
