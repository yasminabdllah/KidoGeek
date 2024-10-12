import { Component } from '@angular/core';

@Component({
  selector: 'app-footerpages',
  templateUrl: './footerpages.component.html',
  styleUrl: './footerpages.component.css'
})
export class FooterpagesComponent {
  navigateToPath(path : string) {
    window.location.href = path;
  }
}
