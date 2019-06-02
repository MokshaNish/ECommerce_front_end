import { Product } from 'src/app/models/product';
export class OrderItem {
    
    id : number;
    status:String;
    quantity :number;

    product: Product = new Product();
   

    constructor()
    {
      this.id = null;
      this.status = null;
      this.quantity = null;
      

  }


}