import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  private users=[
      {username:'admin',password:'1234',roles:['ADMIN','USER']},
      {username:'user1',password:'1234',roles:['USER']},
      {username:'user2',password:'1234',roles:['USER']},

  ];
  public isAuthenticated:boolean;
  public userAuthenticated;
  public token;

  constructor() { }

  public login(username:string,password:string){
     
    let user;
    this.users.forEach(u => {
      if(u.username==username && u.password==password)
      {   user=u; 
          this.token={username:u.username,roles:u.roles};}
      
    });

    if(user){
      this.isAuthenticated=true;
      this.userAuthenticated=user;
    }
    else{

      this.isAuthenticated=false;
      this.userAuthenticated=undefined;
    }
  

  }

  public isAdmin(){

   if(this.userAuthenticated){
     if(this.userAuthenticated.roles.indexOf('ADMIN')>-1){
       return true;

     }
     return false;
   }

  }

  public saveAuthenticatedUser(){
    
    if(this.userAuthenticated){
      localStorage.setItem('authUser',btoa(JSON.stringify(this.token)));

    }

    

  }
  public loadAuthenticatedUserFromLocalStorage(){
       
    let t=localStorage.getItem('authUser');
    if(t){
    let user=JSON.parse(atob(t));
    this.userAuthenticated=user;
    this.isAuthenticated=true;
    this.token=t;
     }
       
  }
 
}
