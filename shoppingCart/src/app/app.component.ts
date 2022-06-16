import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shoppingCart';

  constructor(private router :Router){
    
  }
  //initially showing products page when opened
  ngOnInit(){
    this.router.navigate(['/products'])
  }
}
