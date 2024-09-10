import { Users } from './../users';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productPrice:number= 350;
  name:string= "Ahmed";
  
  users: Users[] = [
    { name: 'fatma', age: 28, gender: 'female', salary: 5000 ,hello: function(){
      return 'hello';
    }},
    { name: 'Mohammed', age: 26, gender: 'male', salary: 8000 },
    { name: 'Shaimaa', age: 22, gender: 'female', salary: 12000 },
    { name: 'rokia', age: 20, gender: 'female', salary: 1000 },
    { name: 'jana', age: 10, gender: 'female', salary: 0 },
  ]

}
