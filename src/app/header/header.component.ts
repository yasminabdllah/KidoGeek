import { CartServiceService } from './../../services/cart-service.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean = false;
  currentUser: User | null = null;
  constructor(private cart_data:CartServiceService,private usersService: UsersService){
  }
  numOfCoursesInCart:number = 0;
  ngOnInit(): void {
    this.numOfCoursesInCart = this.cart_data.numOfCourses();
    if (this.usersService.isLoggedIn()) {
    
      const email = 'ali88@gmail.com'; 
      this.currentUser = this.usersService.getCurrentUser(email);
    }
  }
  numberofItem(){
    return this.numOfCoursesInCart = this.cart_data.numOfCourses();;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.numberofItem();
  }
}
