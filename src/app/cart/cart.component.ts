import { Course } from './../../interfaces/course.interface';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  constructor(private cartService: CartServiceService , private router: Router){}
  cartItems :Course[]=[];
  total :number = 0;
  ngOnInit(): void {
    this.loadCartItems();
  }
  loadCartItems() {
    this.cartItems = this.cartService.getCartsData();
  }

  removeFromCart(index:number){
    const COURSE = this.cartItems[index];
    this.cartService.removeFromCart(COURSE.course_id);
    this.loadCartItems();
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
