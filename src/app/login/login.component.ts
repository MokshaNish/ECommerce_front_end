import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email='';
  password='';
  inavalidLogin = false;

  constructor(private authService:AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  checkLogin(){
    (this.authService.authenticate(this.email,this.password).subscribe(
        data=>{
          console.log("response",data)

          let user = sessionStorage.setItem('email',this.email)

          this.router.navigate([''])
          this.inavalidLogin=false;

        },
         error=>{
           this.inavalidLogin=true;
         }
    )
    );
  }

}
