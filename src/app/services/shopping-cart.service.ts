import { Cart } from './../models/cart';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  apiURL = "http://localhost:8080/cart";


  constructor(private http: HttpClient) { }


  addshoppingCart(cartProduct: Cart){
    return this.http.post<Cart>(this.apiURL,cartProduct); 
  }
}
