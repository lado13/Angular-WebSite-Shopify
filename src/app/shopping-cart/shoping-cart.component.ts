import { Component } from '@angular/core';
import { CartService } from '../serviceFolder/cart.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent {

  cartItems: any[] = [];
  totalQuantity: number = 0;

  constructor(private cartService: CartService, private fB: FormBuilder) { }

  ngOnInit(): void {

    this.cartItems = this.cartService.getCartItems();
    this.updateTotalQuantity();

  }

  isSubmitted = false;
  registerForm = this.fB.group({
    userName: ['', Validators.required],
    userEmail: ['', [Validators.required, Validators.email]],
    userPhone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(13)]],
    userAddress: ['', Validators.required],



  })

  onSubmit(): void {
    this.isSubmitted = true;
    console.log("Submitted form", this.registerForm.value, this.registerForm.invalid, this.cartItems);

    

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
