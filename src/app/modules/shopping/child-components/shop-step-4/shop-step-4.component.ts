import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shop-step-4',
  standalone: true,
  imports: [],
  templateUrl: './shop-step-4.component.html',
  styleUrl: './shop-step-4.component.scss'
})
export class ShopStep4Component {
  @Output() childNextStep = new EventEmitter<string>();

  ngOnInit(): void {
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  next() {
    this.childNextStep.emit('5');
  }
  back() {
    this.childNextStep.emit('3');
  }
}
