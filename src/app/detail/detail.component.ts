import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../serviceFolder/service.service';
import { CartService } from '../serviceFolder/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  productId: string = '';
  product: any;
  messageEx: string = 'კალათში დამატება';
 

  constructor(private route: ActivatedRoute, private productService: ServiceService, private cartService: CartService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.productId = params['productId'];
      this.getProductDetail();

    });

  }

  getProductDetail() {

    this.productService.getProduct(this.productId).subscribe(
      (response: any) => {

        this.product = response;

      },
      (error) => {

        console.error('Error fetching product detail:', error);

      }
    );
  }





  addToCart(product: any): void {


    this.cartService.addToCart(product);
    this.messageEx = this.cartService.messageExist;
    console.log(this.messageEx = this.cartService.messageExist);





  }


}
