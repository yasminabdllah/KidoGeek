import { CartServiceService } from './../../services/cart-service.service';
import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private cart_data:CartServiceService){
  }

  numberofItem(){
    return this.cart_data.numOfCourses();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.numberofItem();
  }
}
