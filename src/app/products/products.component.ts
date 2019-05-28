import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/internal/Subscription";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Product[] = [];

  filteredProducts: Product[] = [];
  //filteredProductList: Product[] = [];
  productListSub: Subscription;
  id;
  categ: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get("id");

    this.productListSub = this.productService.getAll().subscribe(products => {
      console.log(products);
      this.productList = this.filteredProducts = products;

      this.route.queryParamMap.subscribe(params => {
        this.categ = params.get('category');

        let cid = parseInt(this.categ);
        this.filteredProducts = (cid) ?
          this.productList.filter(product => product.categoryId == cid) :
          this.productList;

      });
    });

  }

  filter(query: string) {
    this.filteredProducts = (query) ?
      this.productList.filter(Product => Product.name.toLowerCase().includes(query.toLowerCase())) :
      this.productList;

  }


  saveProduct() {
    let product = {
      "name": "polo",
      "price": 123,
      "category": "wwww",
      "quantity": 444,
      "imageUrl": "zzzz"
    };

    this.productService.save(product).subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.productListSub.unsubscribe();
  }

  viewDetails() {
    console.log();
  }



}
