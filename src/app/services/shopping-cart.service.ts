import { OrderItem } from '../models/OrderItem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  apiURL = "http://localhost:8080/cart";


  constructor(private http: HttpClient) { }


  addshoppingCart(cartProduct: OrderItem) {
    return this.http.post<OrderItem>(this.apiURL, cartProduct);
  }

  getProductFromCart() {

    return this.http.get<[]>(this.apiURL);
  }

  get(id) {

    return this.http.get<{}>(this.apiURL + `/${id}`);
  }

  getCarByUserId() {

    let id = sessionStorage.getItem("userId");
    return this.http.get<{}>(this.apiURL + `/user-id/ ${id}`);
  }


  getAllCartItem() {

    return this.http.get<[]>(this.apiURL + '/all');

  }

  addProductToCart(cartForm) {
    return this.http.post(this.apiURL+'/add',cartForm);
  }

  removeItemCart(cartItem){
    return this.http.delete(this.apiURL, cartItem);
  }
}
