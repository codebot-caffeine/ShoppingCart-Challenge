import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shoppingCart';
  loggedIn = false
  token = false

  constructor(private router :Router){
    if(localStorage.getItem('token')){
      this.loggedIn = true
      this.token=false
    }
  }
  //initially showing products page when opened
  ngOnInit(){
    if(!localStorage.getItem('userDetails')){
      this.loggedIn = false
      this.token = false
      this.router.navigate(['login'])
    }else{
      this.router.navigate(['products'])
      this.token = true
      this.loggedIn = true
    }
  }

  ngOnDestroy(){
    localStorage.removeItem('userDetails')
    localStorage.removeItem('token')
  }

  backToSignIn(){
    localStorage.removeItem('userDetails')
    localStorage.removeItem('token')
    this.loggedIn = false
    this.token = false
    this.router.navigate(['login'])
  }
}
