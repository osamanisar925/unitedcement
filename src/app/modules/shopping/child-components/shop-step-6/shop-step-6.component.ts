import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shop-step-6',
  standalone: true,
  imports: [],
  templateUrl: './shop-step-6.component.html',
  styleUrl: './shop-step-6.component.scss'
})
export class ShopStep6Component {
  @Output() childNextStep = new EventEmitter<string>();
  accountTitle: string = 'Login To Your Account';
  
  ngOnInit(): void {
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setAccountTitle(title: string) {
    if(title === 'login') {
      this.accountTitle = 'Login To Your Account';
    }
    else if(title === 'register') {
      this.accountTitle = 'Create Account';
    }
    else if(title === 'guest') {
      this.accountTitle = 'Guest Login';
    }
  }

  next() {
    this.childNextStep.emit('7');
  }
  back() {
    this.childNextStep.emit('5');
  }
}
