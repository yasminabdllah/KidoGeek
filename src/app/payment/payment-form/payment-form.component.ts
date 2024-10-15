import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent {
  errorMessage: string | undefined;

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Form submitted!');
  }

  navigateToPath(path: string) {
    this.router.navigate([path]);
  }
}
