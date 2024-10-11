import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {
  userData: User[] = [];
  currentIndexMap: { [key: string]: number } = { 'slides1': 0, 'slides2': 0 };

  slidesMap: { [key: string]: string[] } = {
    'slides1': ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6', 'slide7'],
    'slides2': ['slide8', 'slide9', 'slide10', 'slide11', 'slide12', 'slide13', 'slide14', 'slide15', 'slide16', 'slide17']
  };

  constructor(private userService: UsersService) {
    this.userData = this.userService.users_data;
  }

  // Navigate to the next slide
  nextSlide(slidesName: string) {
    const slides = this.slidesMap[slidesName];
    this.currentIndexMap[slidesName] = (this.currentIndexMap[slidesName] + 1) % slides.length;
    this.updateRadioButton(slidesName);
  }

  // Navigate to the previous slide
  prevSlide(slidesName: string) {
    const slides = this.slidesMap[slidesName];
    this.currentIndexMap[slidesName] = (this.currentIndexMap[slidesName] - 1 + slides.length) % slides.length;
    this.updateRadioButton(slidesName);
  }

  // Update the radio button selection when navigating slides
  private updateRadioButton(slidesName: string) {
    const radios = document.getElementsByName(slidesName) as NodeListOf<HTMLInputElement>;
    if (radios && radios.length > 0) {
      radios.forEach((radio, index) => {
        radio.checked = (index === this.currentIndexMap[slidesName]);
      });
    }
  }
}
