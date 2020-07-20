import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(dataForm){
   
    this.authservice.login(dataForm.username,dataForm.password);
    if(this.authservice.isAuthenticated){
        this.authservice.saveAuthenticatedUser();
        this.router.navigateByUrl("/home")


    }
   
  }

}
