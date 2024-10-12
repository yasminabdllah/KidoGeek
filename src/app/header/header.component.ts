import { CartServiceService } from './../../services/cart-service.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(private cart_data:CartServiceService){
  }
  numOfCoursesInCart:number = 0;
  ngOnInit(): void {
    this.numOfCoursesInCart = this.cart_data.numOfCourses();
  }
  numberofItem(){
    return this.numOfCoursesInCart = this.cart_data.numOfCourses();;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.numberofItem();
  }
}
