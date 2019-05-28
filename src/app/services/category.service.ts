import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiURL = "http://localhost:8080/categories";

  
  constructor(private http: HttpClient) { }

  getAll() {
    
    return this.http.get<[]>(this.apiURL);
  }

  get(id) {

    return this.http.get<{}>(this.apiURL + `/${id}`);
 }


}
