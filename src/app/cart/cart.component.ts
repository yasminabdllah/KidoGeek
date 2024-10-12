import { Course } from './../../interfaces/course.interface';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit,OnChanges{
  constructor(private cartService: CartServiceService , private router: Router){}
  cartItems :Course[]=[];
  total :number = 0;
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartsData();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.cartItems = this.cartService.getCartsData();
  }
  removeFromCart(index:number){
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartsData();
  }

  totalPrice(){
    this.total=0;
    this.cartItems.forEach(c => {
      console.log(c.price)
      this.total += c.price;
    });
    return this.total;
  }

  navigateToPath(path:string){
    this.router.navigate([path]);
  }


}
