import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = { email: '', password: '' }; 
  errorMessage: string = '';
  isLoggedIn: boolean = false; 

  constructor(private usersService: UsersService, private router: Router) { }

  onLogin(): void {
    const isAuthenticated = this.usersService.login(this.user); 

    if (isAuthenticated) {
      this.isLoggedIn = true; 
      this.errorMessage = '';
      this.router.navigate(['/home']); 
    } else {
      this.isLoggedIn = false; 
      this.errorMessage = 'Invalid username or password. Please try again.';
    }
  }
}
