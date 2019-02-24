import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { CartService } from '../../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Array<Product>;
  private sub;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.load();
  }
  load = () => {
    this.sub = this.productService.getProducts('../../../assets/db.json');
    this.products = this.sub;
  }
  addToCart = (product) => {
    this.cartService.addToCart({product, quantity: 1});
  }
  // ngOnDestroy() {
    // this.sub.unsubscribe();
  // }
}
