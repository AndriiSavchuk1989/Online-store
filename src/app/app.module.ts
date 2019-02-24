import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // client module
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { PrivacyPolicyComponent } from './pages/static/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/static/terms-conditions/terms-conditions.component';
import { AuthRoutingModule } from './pages/auth/auth-routing.module';
import { AuthModule } from './pages/auth/auth.module';
import { ProductComponent } from './pages/product/product.component';
import { QuantityControlComponent } from './quantity-control/quantity-control.component';
import { CartPageComponent } from './pages/cart/cart.component';
import { CartService } from './service/cart.service';
import { ProductService } from './service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    ProductComponent,
    QuantityControlComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [CartService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
