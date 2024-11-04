import { Component } from '@angular/core';
import { ShopStep1Component } from "./child-components/shop-step-1/shop-step-1.component";
import { ShopStep2Component } from "./child-components/shop-step-2/shop-step-2.component";
import { CommonModule } from '@angular/common';
import { ShopStep3Component } from "./child-components/shop-step-3/shop-step-3.component";
import { ShopStep4Component } from "./child-components/shop-step-4/shop-step-4.component";

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [CommonModule, ShopStep1Component, ShopStep2Component, ShopStep3Component, ShopStep4Component],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {
  step = localStorage.getItem('shop-step') || '1';

  stepChanger(step: any) {
    localStorage.setItem('shop-step', step);
    this.step = step;
  }

  ngOnDestroy() {
    localStorage.removeItem('shop-step');
  }
}
