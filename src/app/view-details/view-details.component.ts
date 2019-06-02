import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { OrderItem } from '../models/OrderItem';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  productAddedToCart: any;
  product ={};
  id;
  shopcart : OrderItem = <OrderItem>{};
  productList: Product[]=[];
  quantity= 1;


  constructor(private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute) { }


  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get("pid");

    this.productService.get(this.id).subscribe(product => {
      console.log(product);
     this.product = product;
    });


  }

  addtoCart(product : Product){
    
    console.log(product);
    //this.productAddedToCart = this.shoppingCartService.getProductFromCart();
    //if(this.productAddedToCart==null){
      //this.productAddedToCart=[];

      let oi = <OrderItem> new Object();
      oi.status = "Pending";
      oi.quantity = 1;
      oi.product=product;

      this.shoppingCartService.addProductToCart(oi).subscribe(data => {
        console.log(data);
      });

   //}
  }

}
