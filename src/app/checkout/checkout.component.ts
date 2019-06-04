import { Cart } from './../models/Cart';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { OrderItem } from '../models/OrderItem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  orderItemSummeryList: OrderItem[] = [];


  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {

    this.shoppingCartService.getAllCartItem().subscribe(orderItem => {
      this.orderItemSummeryList = orderItem;
      console.log(this.orderItemSummeryList);
    });



  }

  deleteCart() {
    this.shoppingCartService.deleteCart().subscribe(data=>{
      
      this.shoppingCartService.getCarByUserId().subscribe(cartData => {
        // console.log(cartData);
        sessionStorage.setItem('cartId', cartData['id']);
      });
    });
  }

}
