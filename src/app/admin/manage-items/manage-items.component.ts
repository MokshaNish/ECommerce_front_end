import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.component.html',
  styleUrls: ['./manage-items.component.css']
})
export class ManageItemsComponent implements OnInit {

  product = {};
  id;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get("pid");

    this.productService.get(this.id).subscribe(product => {
      console.log(product);
     this.product = product;
    });

  }

  save() {

    console.log(this.product);

    this.productService.save(this.product).subscribe(data => {
      console.log(data);
    });
  }

  deleteItem(){
    if(!confirm('Are you want to delete the item ')) return;
      this.productService.deleteProduct(this.id).subscribe(data =>{
        console.log(data);
      });

    
  }

  onSubmit(){
    console.log(this.product);
  }

}
