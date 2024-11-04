import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shop-step-3',
  standalone: true,
  imports: [],
  templateUrl: './shop-step-3.component.html',
  styleUrl: './shop-step-3.component.scss'
})
export class ShopStep3Component {
  @Output() childNextStep = new EventEmitter<string>();

  ngOnInit(): void {
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  next() {
    this.childNextStep.emit('4');
  }
  back() {
    this.childNextStep.emit('2');
  }
}
