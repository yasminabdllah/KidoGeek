import { Instructor } from './../interfaces/instructor.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstructorsService {

  constructor() { }
  instructor_data: Instructor[]=[
    {
      instructor_id: 1,
      name: 'Fatima Nabil',
      img:'',
      expertise: 'Scratch Programming',
      courses: [101]
    },
    {
      instructor_id: 2,
      name: 'Ahmed Samir',
      img:'',
      expertise: 'Game Development',
      courses: [102]
    },
    {
      instructor_id: 3,
      name: 'Mariam Ali',
      img:'',
      expertise: 'Web Development',
      courses: [103]
    },
    {
      instructor_id: 4,
      name: 'Mohamed Hassan',
      img:'',
      expertise: 'Python Programming',
      courses: [104]
    },
    {
      instructor_id: 5,
      name: 'Sara Abdelrahman',
      img:'',
      expertise: 'Game Development',
      courses: [105]
    },
    {
      instructor_id: 6,
      name: 'Hassan Youssef',
      img:'',
      expertise: 'Robotics Programming',
      courses: [106]
    },
    {
      instructor_id: 7,
      name: 'Omar Khaled',
      img:'',
      expertise: 'JavaScript',
      courses: [107]
    },
    {
      instructor_id: 8,
      name: 'Layla Ibrahim',
      img:'',
      expertise: '3D Animation',
      courses: [108]
    },
    {
      instructor_id: 9,
      name: 'Nour El-Din',
      img:'',
      expertise: 'Java Programming',
      courses: [109]
    },
    {
      instructor_id: 10,
      name: 'Khaled Mostafa',
      img:'',
      expertise: 'Mobile App Development',
      courses: [110]
    }
  ]


}
