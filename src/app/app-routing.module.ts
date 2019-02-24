import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductsComponent} from './pages/products/products.component';
import {PrivacyPolicyComponent} from './pages/static/privacy-policy/privacy-policy.component';
import {TermsConditionsComponent} from './pages/static/terms-conditions/terms-conditions.component';
import {LoginComponent} from './pages/auth/login/login.component';

const appRoutes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'terms-conditions', component: TermsConditionsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
