import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Subscription } from "rxjs/internal/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  productList: Product[] = [];
  filteredProductList: Product[]=[];
  productListSub: Subscription;

  constructor(private productService: ProductService , 
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.productListSub = this.productService.getAll().subscribe(products => {
      console.log(products);
      this.filteredProductList = this.productList = products;
    });
  }

  editProductDetails(){

  }

  filter(query: string){
    this.filteredProductList =(query)?
    this.productList.filter (Product=>Product.name.toLowerCase().includes(query.toLowerCase())): 
    this.productList;
  
  }

  ngOnDestroy(){
this.productListSub.unsubscribe();
  }
}
