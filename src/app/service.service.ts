import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  product: any;
  private apiUrl = 'https://api.escuelajs.co/api/v1';

  constructor(private http: HttpClient) { }


  getCategories(): Observable<any> {

    const url = `${this.apiUrl}/categories`;
    return this.http.get(url);

  }

  getProduct(productId: string): Observable<any> {

    const url = `${this.apiUrl}/products/${productId}`;
    return this.http.get(url);

  }


  getProductsByCategory(categoryId: string): Observable<any> {

    const url = `${this.apiUrl}/products?categoryId=${categoryId}`;
    return this.http.get(url);

  }

  searchProductsByTitle(title: string): Observable<any> {

    const url = `${this.apiUrl}/products?title=${title}`;
    return this.http.get(url);

  }







}
