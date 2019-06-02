import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categoryList;
  @Input ('category') categ;


  constructor(private categoryService : CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(category => {
     // console.log(category);
      this.categoryList = category;
    }); 

  }

}
