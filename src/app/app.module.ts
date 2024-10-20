
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { PanierComponent } from './panier/panier.component';
import { ReceiptComponent } from './receipt/receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    FavoritesComponent,
    PanierComponent,
    ReceiptComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
     FormsModule,
     
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
