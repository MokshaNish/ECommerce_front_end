import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = "http://localhost:8080/user";


  constructor(private http: HttpClient) { }

  saveUserDetails(user: User) {
    return this.http.post(this.apiURL, user);
  }

  authenticate(user) {
    return this.http.post(this.apiURL + '/auth', user);
  }

  authenticated(email: string) {
    return this.http.get(this.apiURL + email);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email');
  }
}
