import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shop-step-2',
  standalone: true,
  imports: [],
  templateUrl: './shop-step-2.component.html',
  styleUrl: './shop-step-2.component.scss'
})
export class ShopStep2Component {
  @Output() childNextStep = new EventEmitter<string>();

  next() {
    this.childNextStep.emit('3');
  }
  back() {
    this.childNextStep.emit('1');
  }
}
