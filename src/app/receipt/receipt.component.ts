import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css'],
})
export class ReceiptComponent {
  @Input() cart: any;
  @Input() customerDetails: any;
currentDate: string | number | Date | undefined;

  calculateTotal(): number {
    return this.cart.reduce((total: number, item: any) => total + item.price, 0);
  }

  calculateFees(): number {
    return this.calculateTotal() * 0.1; // Exemple de frais (10%)
  }

  get grossPrice(): number {
    return this.calculateTotal() + this.calculateFees();
  }
}
