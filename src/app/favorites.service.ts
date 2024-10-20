import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favorites: Product[] = [];

  addFavorite(product: Product): void {
    if (!this.favorites.includes(product)) {
      this.favorites.push(product);
    }
  }

  getFavorites(): Product[] {
    return this.favorites;
  }
}
