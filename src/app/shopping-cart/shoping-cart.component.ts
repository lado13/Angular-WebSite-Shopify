import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent {

  cartItems: any[] = [];
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartItems = this.cartService.getCartItems();
    this.updateTotalQuantity();

  }

  removeFromCart(product: any): void {

    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalQuantity();

  }

  increaseQuantity(product: any): void {

    this.cartService.increaseQuantity(product);
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalQuantity();

  }

  decreaseQuantity(product: any): void {

    this.cartService.decreaseQuantity(product);
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalQuantity();

  }

  updateTotalQuantity(): void {

    this.totalQuantity = this.cartItems.reduce((total, item) => total + item.quantity, 0);

  }



}
