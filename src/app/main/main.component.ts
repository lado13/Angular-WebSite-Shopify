import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  categories: any[] = [];
  selectedCategory: string = '';
  products: any[] = [];


  constructor(private productService: ServiceService) { }


  ngOnInit() {

    this.loadCategories();
    this.loadProductsByCategory('');

  }


  loadCategories() {
    this.productService.getCategories().subscribe(

      (response: any) => {

        this.categories = response;

      },
      (error) => {

        console.error('Error fetching categories:', error);

      }
    );
  }


  loadProductsByCategory(categoryId: string) {

    this.selectedCategory = categoryId;
    this.productService.getProductsByCategory(categoryId).subscribe(

      (response: any) => {

        this.products = response;

      },
      (error) => {

        console.error('Error fetching products by category:', error);

      }
    );
  }



}
