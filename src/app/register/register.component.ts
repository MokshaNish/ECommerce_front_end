import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // user = {};
  user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit() {


  }

  saveDetails() {


    console.log(this.user);

    this.user.type = "Customer";

    this.authService.saveUserDetails(this.user).subscribe(data => {
      console.log(data);
    });
  }

}
