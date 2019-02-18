import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing.module';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {TermsConditionsComponent} from './terms-conditions/terms-conditions.component';
import {CartComponent} from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
