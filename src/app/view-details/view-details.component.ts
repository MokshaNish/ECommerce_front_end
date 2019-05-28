import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../models/cart';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute
    ) { }


  product = {};
  id;
  shopcart : Cart = <Cart>{};

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get("pid");

    this.productService.get(this.id).subscribe(product => {
      console.log(product);
     this.product = product;
    });


  }

  addtoCart(product : Product){
    let shopcart = <Cart> new Object();
    shopcart.pid = product.pid;
    shopcart.productName = product.name;
    shopcart.price = product.price;
    shopcart.imageUrl = product.imageUrl;
    shopcart.quantity =1;
    shopcart.uid = 1;

    console.log(shopcart);

    this.shoppingCartService.addshoppingCart(shopcart);
    
  
 
 
  }

}
