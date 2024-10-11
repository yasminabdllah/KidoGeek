import { Course } from './../../interfaces/course.interface';
import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  constructor(private cartService: CartServiceService){}
  cartItems :Course[]=[];
  total :number = 0;
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartsData();
  }

  removeFromCart(index:number){
    this.cartService.removeFromCart(index)
  }

  totalPrice(){
    this.total=0;
    this.cartItems.forEach(c => {
      console.log(c.price)
      this.total += c.price;
    });
    return this.total;
  }
}
