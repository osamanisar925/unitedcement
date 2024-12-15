import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {
  private readonly activeModal = inject(NgbActiveModal)
  heading: string = '';


  closeModal(){
    this.activeModal.close();
  }
}
