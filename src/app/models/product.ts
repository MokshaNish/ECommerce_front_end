import { Category } from './category';
import { OrderItem } from './OrderItem';

export class Product {


  category: Category = new Category();


  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: String;
  pid: number;


  constructor() {
    this.id = null;
    this.pid = null;
    this.name = null;
    this.price = null;
    this.quantity = null;
    this.imageUrl = null;
  }
}

