import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  productsService: any;

  constructor(private router: Router) {} 

  ngOnInit(): void {
    this.products = this.productsService.products();
  }

  viewProduct(product: Product): void {
    this.router.navigate(['/product', product.id]);
  }
}
