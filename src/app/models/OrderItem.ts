import { Product } from 'src/app/models/product';
import { User } from './user';
import { Cart } from './Cart';
export class OrderItem {
    
    id : number;
    quantity :number;

    product: Product = new Product();
    cart: Cart = new Cart();
   

    constructor()
    {
      this.id = null;
      this.quantity = null;
      

  }


}