import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prueba';
  
  constructor(private route: Router){

  }

  ngOnInit(){
    
  }
 
  goToCar(){
    this.route.navigate(['/car']);

  }
  
  goToItems(){
    this.route.navigate(['/items']);

  }
  
}
