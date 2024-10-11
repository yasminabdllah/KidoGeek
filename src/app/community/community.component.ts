import { Component } from '@angular/core'; 
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent  {
  constructor (private user:UsersService) {
    this.userData = user.users_data
  }
  userData: User[]=[]
  currentIndex: number = 0;
    slides: string[] = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6', 'slide7'];

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateRadioButton();
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateRadioButton();
    }

    private updateRadioButton() {
        const radios = document.getElementsByName('slides') as NodeListOf<HTMLInputElement>;
        radios[this.currentIndex].checked = true;
    }
}