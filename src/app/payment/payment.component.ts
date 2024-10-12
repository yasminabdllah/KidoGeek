import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../interfaces/course.interface';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent  implements OnInit{
  errorMessage: any;
  total: number = 0;
  constructor(private cartService: CartServiceService, private router: Router){}
  cartItems :Course[]=[];
  ngOnInit(): void {
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
  onSubmit() {
  throw new Error('Method not implemented.');
  }
  navigateToPath(path:string){
  this.router.navigate([path]);
  }
}
