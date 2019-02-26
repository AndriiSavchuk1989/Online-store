import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CartPageComponent } from './cart.component';
import { cartPageRoutes } from './cart.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(cartPageRoutes)
  ],
  declarations: [
    CartPageComponent
  ]
})
export class CartPageModule { }
