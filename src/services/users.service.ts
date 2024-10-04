import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }
  users_data: User[] = [
    {
      id: 1,
      user_name: 'Ali',
      password: '123',
      role: 'student',
      age: 19,
      enrolled: [70, 50, 60],
      progress: ['20%', '80%', '33%'],
    },
    {
      id: 2,
      user_name: 'Fatima',
      password: 'password123',
      role: 'student',
      age: 17,
      enrolled: [70, 80],
      progress: ['45%', '10%']
    },
    {
      id: 3,
      user_name: 'Mohamed',
      password: 'pass456',
      role: 'student',
      age: 16,
      enrolled: [50, 60],
      progress: ['60%', '25%']
    },
    {
      id: 4,
      user_name: 'Sara',
      password: 'sara789',
      role: 'student',
      age: 18,
      enrolled: [70, 90, 60],
      progress: ['75%', '40%', '55%']
    },
    {
      id: 5,
      user_name: 'Omar',
      password: 'omar321',
      role: 'student',
      age: 19,
      enrolled: [80, 90],
      progress: ['30%', '65%']
    },
    {
      id: 6,
      user_name: 'Layla',
      password: 'layla543',
      role: 'student',
      age: 15,
      enrolled: [50, 60, 80],
      progress: ['10%', '85%', '50%']
    },
    {
      id: 7,
      user_name: 'Hassan',
      password: 'hassan007',
      role: 'student',
      age: 20,
      enrolled: [60, 70],
      progress: ['100%', '60%']
    },
    {
      id: 8,
      user_name: 'Nour',
      password: 'nourpass',
      role: 'student',
      age: 17,
      enrolled: [50, 90],
      progress: ['95%', '35%']
    },
    {
      id: 9,
      user_name: 'Khaled',
      password: 'khaled999',
      role: 'student',
      age: 16,
      enrolled: [60, 80],
      progress: ['20%', '70%']
    },
    {
      id: 10,
      user_name: 'Mariam',
      password: 'mariampass',
      role: 'student',
      age: 18,
      enrolled: [50, 70, 90],
      progress: ['85%', '55%', '25%']
    }
  ]

}
