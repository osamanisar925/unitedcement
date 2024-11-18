import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop-step-7',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './shop-step-7.component.html',
  styleUrl: './shop-step-7.component.scss'
})
export class ShopStep7Component {
  @Output() childNextStep = new EventEmitter<string>();
  paymentMethod: string = '';

  ngOnInit(): void {
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  next() {
    this.childNextStep.emit('8');
  }
  back() {
    this.childNextStep.emit('6');
  }
}
