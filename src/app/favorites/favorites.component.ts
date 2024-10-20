import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: Product[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFromFavorites(item: Product): void {
    this.favorites = this.favorites.filter(fav => fav !== item);
  }
}
