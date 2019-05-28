import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL = "http://localhost:8080/products";

  constructor(private http: HttpClient) { }

  getAll() {
    
    return this.http.get<[]>(this.apiURL);
  }

  get(id) {

     return this.http.get<{}>(this.apiURL + `/${id}`);
  }

  save(product) {

    return this.http.post(this.apiURL, product);
  }

  deleteProduct(id){
    return this.http.delete(this.apiURL + `/${id}`);

  }
}
