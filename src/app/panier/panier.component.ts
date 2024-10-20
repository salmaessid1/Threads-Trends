import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  cartItems: Product[] = []; 
  showForm = false; 
  showReceipt = false; 
  customerInfo = {
    name: '',
    address: '',
    phone: ''  // Assurez-vous que c'est un string
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems(); 
  }

  removeFromCart(item: Product): void {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems(); 
  }

  calculateTotal(): number {
    return this.cartService.calculateTotal();
  }

  openForm(): void {
    this.showForm = true; 
  }

  submitCustomerInfo(info: { name: string; address: string; phone: string }): void {
    if (info.name && info.address && info.phone) {
      this.showReceipt = true; 
      this.showForm = false; 
    }
  }
}
