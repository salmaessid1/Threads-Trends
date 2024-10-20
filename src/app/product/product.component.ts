import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { FavoritesService } from '../favorites.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
selectColor(arg0: string) {
throw new Error('Method not implemented.');
}
  products: Product[] = [
    {
      id: 1, name: 'Chemise', color: 'Rouge', price: 29.99, img: 'assets/ChemiseF.png',
      category: 'femme',
      description: ''
    },
    {
      id: 2, name: 'Pantalon', color: 'Bleu', price: 49.99, img: 'assets/PantalonH.png',
      category: 'homme',
      description: ''
    },
    {
      id: 3, name: 'Pull', color: 'Rouge', price: 60, img: 'assets/PullF.png',
      category: 'femme',
      description: ''
    },
    {
      id: 4, name: 'Robe', color: 'Vert', price: 180, img: 'assets/Robe.png',
      category: 'femme',
      description: ''
    },
    {
      id: 5, name: 'Set', color: 'Bleu', price: 90, img: 'assets/SetF.png',
      category: 'femme',
      description: ''
    },
    {
      id: 6, name: 'Set', color: 'Rouge', price: 70, img: 'assets/SetGarcon.png',
      category: 'enfants',
      description: ''
    },
    {
      id: 7, name: 'Veste', color: 'Bleu', price: 100, img: 'assets/VesteH.png',
      category: 'homme',
      description: ''
    },
    {
      id: 8, name: 'Set', color: 'Vert', price: 75, img: 'assets/SetH.png',
      category: 'homme',
      description: ''
    },
    {
      id: 9, name: 'Shirt', color: 'Rouge', price: 80, img: 'assets/ShirtH.png',
      category: 'homme',
      description: ''
    },
  ];

  filteredProducts = this.products;
  sortPrice: boolean = true;

  constructor(public favoritesService: FavoritesService, public cartService: CartService) {} 

  ngOnInit(): void {
    this.sortProducts(); 
    this.filterProducts({ target: { value: '' } });
    }
  

  filterProducts(event: any): void {
    const selectedCategory = event.target.value;
    console.log(`Catégorie sélectionnée: ${selectedCategory}`); 
    this.filteredProducts = selectedCategory ? this.products.filter(product => product.category === selectedCategory) : this.products;
    console.log(this.filteredProducts); 
  }
  
  sortProducts() {
    this.filteredProducts.sort((a, b) => {
      return this.sortPrice ? a.price - b.price : b.price - a.price;
    });
  }


  toggleSortPrice() {
    this.sortPrice = !this.sortPrice; 
    this.sortProducts(); 
  }

  product(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    if (selectedValue) {
      this.filteredProducts = this.products.filter(product => product.category === selectedValue);
    } else {
      this.filteredProducts = this.products; 
    }
  }

  addToFavorites(product: Product): void {
    this.favoritesService.addFavorite(product);
    console.log(`Ajouté ${product.name} aux favoris`);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    console.log(`Ajouté ${product.name} au panier`);
  }


  

  cartItems = [
  ];

  customerInfo = {
  };

  showReceipt: boolean = false;

  onBuyNow(): void {
    this.showReceipt = true; 
  }
}
