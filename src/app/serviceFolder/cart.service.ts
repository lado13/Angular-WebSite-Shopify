import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'shoppingCart';
  products: any[] = [];
  messageExist: string = '';


  constructor(private http: HttpClient) {
    this.loadCart();
  }

  addToCart(product: any): void {


    const existingProduct = this.products.find(p => p.id === product.id);
    if (existingProduct) {

      existingProduct.quantity++;
      this.messageExist = "უკვე კალათშია!"



    } else {

      product.quantity = 1;
      this.products.unshift(product);

    }

    this.saveCart();
  }

  removeFromCart(product: any): void {

    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {

      this.products.splice(index, 1);
      this.saveCart();

    }

  }

  increaseQuantity(product: any): void {

    const existingProduct = this.products.find(p => p.id === product.id);
    if (existingProduct) {

      existingProduct.quantity++;
      this.saveCart();

    }

  }

  decreaseQuantity(product: any): void {

    const existingProduct = this.products.find(p => p.id === product.id);
    if (existingProduct) {

      existingProduct.quantity--;

      if (existingProduct.quantity === 0) {

        this.removeFromCart(product);

      }

      this.saveCart();
    }


  }

  getCartItems(): any[] {

    return this.products;

  }

  clearCart(): void {

    this.products = [];
    this.saveCart();

  }

  private saveCart(): void {

    localStorage.setItem(this.storageKey, JSON.stringify(this.products));

  }

  private loadCart(): void {

    const cartItems = localStorage.getItem(this.storageKey);
    if (cartItems) {

      this.products = JSON.parse(cartItems);

    }
  }

  getCartTotal(): number {

    return this.products.reduce((total, product) => total + product.price * product.quantity, 0);

  }

  getTotalQuantity(): number {
    return this.products.length;
  }






}
