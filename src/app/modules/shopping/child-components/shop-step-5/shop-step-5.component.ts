import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shop-step-5',
  standalone: true,
  imports: [],
  templateUrl: './shop-step-5.component.html',
  styleUrl: './shop-step-5.component.scss'
})
export class ShopStep5Component {
  @Output() childNextStep = new EventEmitter<string>();

  ngOnInit(): void {
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  next() {
    this.childNextStep.emit('6');
  }
  back() {
    this.childNextStep.emit('4');
  }
}
