import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { AppRoutingModule } from './app-routing.module';
import {PrivacyPolicyComponent} from './pages/privacy-policy/privacy-policy.component';
import {TermsConditionsComponent} from './pages/terms-conditions/terms-conditions.component';
import {AuthRoutingModule} from './pages/auth/auth-routing.module';
import {AuthModule} from './pages/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
