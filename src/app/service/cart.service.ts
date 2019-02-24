import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../model/cart';
import { Product } from '../model/product';

@Injectable()
export class CartService {

  public cartListSubject = new BehaviorSubject([]);
  public toggleCartSubject = new BehaviorSubject(false);

  toggleCart = () => {
    this.toggleCartSubject.next(!this.toggleCartSubject.getValue());
  }
  addToCart = (cart: Cart) => {
    const current = this.cartListSubject.getValue();
    const dup = current.find( c => c.product.title === cart.product.product.title);
    if (dup) { dup.quantity += cart.quantity; }
    else { current.push(cart); }
    this.cartListSubject.next(current);
  }
  reloadCart = (cartList) => {
    this.cartListSubject.next(cartList);
  }
  removeCart = index => {
    const current = this.cartListSubject.getValue();
    current.splice(index, 1);
    this.cartListSubject.next(current);
  }
}
