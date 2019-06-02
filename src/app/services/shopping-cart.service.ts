import { OrderItem } from '../models/OrderItem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  apiURL = "http://localhost:8080/orderItem";


  constructor(private http: HttpClient) { }


  addshoppingCart(cartProduct: OrderItem){
    return this.http.post<OrderItem>(this.apiURL,cartProduct); 
  }

  getProductFromCart() {
    
    return this.http.get<[]>(this.apiURL);
  }

  get(id) {

     return this.http.get<{}>(this.apiURL + `/${id}`);
  }

  getAllCartItem(){

    return this.http.get<[]>(this.apiURL+'/all');

  }

  addProductToCart(oi:OrderItem){
    return this.http.post(this.apiURL, oi);


  }
}
