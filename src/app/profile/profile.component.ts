// src/app/profile/profile.component.ts
import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = 
  {
  
    user_name: 'Fatima',
    age: 17,
    enrolled: [70, 80],
    progress: ['45%', '10%'],
    email: 'fhassan88@gmail.com',
    photo: '../assets/usersPhotos/user5.jpg',
    comments: ["The progress tracking feature is really helpful. It's great to see how my kid is improving with each lesson."],
    lastAccess:'12/2/2023',
    firstAccess:'12/2/2022'
    
  };

  ngOnInit() {}
}


