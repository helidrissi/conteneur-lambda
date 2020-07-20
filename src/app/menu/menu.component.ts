import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router,public authservice:AuthenticationService) { }

  ngOnInit(): void {
    
  }

  onLogout(){
    localStorage.removeItem('authUser');
    this.router.navigateByUrl("/login")
  }
 
}
