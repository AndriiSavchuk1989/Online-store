import { CartService } from '../../service/cart.service';
import { Cart } from '../../model/cart';

export class CartBaseComponent {
  public cartList: Cart[];
  public totalPrice: number;
  constructor(protected cartService: CartService) {
    this.loadCart();
  }
  loadCart = () => {
    this.cartService.cartListSubject
      .subscribe(res => {
        this.cartList = res;
        let total = 0;
        for (const cart of this.cartList) {
          total += cart.product.product.price * cart.quantity;
        }
        this.totalPrice = total;
      });
  }
  removeFromCart = index => {
    this.cartService.removeCart(index);
  }
}
