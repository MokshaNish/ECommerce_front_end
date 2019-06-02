import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

user = {};

  constructor(private authService:AuthService) { }

  ngOnInit() {

  
  }

  saveDetails(user:User) {

    console.log(this.user);

    let u = <User> new Object();
    u.type = "Customer";
    
  
    this.authService.saveUserDetails(this.user).subscribe(data => {
      console.log(data);
    });
  }

}
