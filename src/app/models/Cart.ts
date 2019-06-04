import { OrderItem } from './OrderItem';

export class Cart {

    id:number;
    userId:number;
    status:String;

    orderItemList: OrderItem[];

    constructor()
    {
      this.id = null;
      this.userId = null;
      this.status = null;
      


  }
}