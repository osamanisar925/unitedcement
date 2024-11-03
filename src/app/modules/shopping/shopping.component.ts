import { Component } from '@angular/core';
import { ShopStep1Component } from "./child-components/shop-step-1/shop-step-1.component";
import { ShopStep2Component } from "./child-components/shop-step-2/shop-step-2.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [CommonModule, ShopStep1Component, ShopStep2Component],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {
  step: string = '1';

  stepChanger(step: string) {
    this.step = step;
  }
}
