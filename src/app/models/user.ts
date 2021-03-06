import { OrderItem } from './OrderItem';

export class User {

  id: number;
  email: String;
  firstName: String;
  lastName: String;
  type: String;
  password: String;
  contactNo: String;

  orderItemList: OrderItem[];

  constructor() {
    this.id = null;
    this.email = null;
    this.firstName = null;
    this.lastName = null;
    this.type = null;
    this.password = null;
    this.contactNo = null;
  }
}