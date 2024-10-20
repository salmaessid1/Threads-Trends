import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PanierComponent } from './panier/panier.component';
import { ReceiptComponent } from './receipt/receipt.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'about', component: AboutComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductComponent }, 
  { path: 'product/:id', component: ProductComponent }, 
  { path: 'favorites', component: FavoritesComponent}, 
  { path: 'panier', component: PanierComponent },
  { path: 'receipt', component: ReceiptComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
