import { Course } from './../interfaces/course.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor() { }
  courses_data: Course[] = [
    {
      course_id: 101,
      title: 'Introduction to Scratch Programming',
      description: 'A beginner-friendly course that introduces kids to the world of programming through Scratch, a block-based programming language. Ideal for children aged 7-10.',
      difficulty: 'Beginner',
      duration: '3 weeks',
      author: 'Fatima Nabil',
      category: 'gaming',
      num_of_videos: 88,
      photo: '',
      price: 90,
      videos:['','']//write the path of each of video
    },
    {
      course_id: 102,
      title: 'Building Games with Scratch',
      description: 'In this course, kids will learn how to create simple games using Scratch. This course focuses on enhancing creativity while teaching the basics of game development.',
      difficulty: 'Intermediate',
      duration: '4 weeks',
      author: 'Ahmed Samir',
      category: 'gaming',
      num_of_videos: 75,
      photo: '',
      price: 58,
      videos:['','']
    },
    {
      course_id: 103,
      title: 'HTML & CSS for Kids: Create Your First Website',
      description: 'This course introduces children to HTML and CSS, teaching them how to build and style their very first website. Suitable for kids aged 10-13.',
      difficulty: 'Beginner',
      duration: '5 weeks',
      author: 'Mariam Ali',
      category: 'web',
      num_of_videos: 50,
      photo: '',
      price: 30,
      videos:['','']
    },
    {
      course_id: 104,
      title: 'Introduction to Python Programming',
      description: 'A fun and interactive introduction to Python for kids. This course covers basic concepts such as variables, loops, and functions. Recommended for kids aged 12 and above.',
      difficulty: 'Beginner',
      duration: '6 weeks',
      author: 'Mohamed Hassan',
      category: 'AI',
      num_of_videos: 75,
      photo: '',
      price: 120,
      videos:['','']
    },
    {
      course_id: 105,
      title: 'Game Development with Python',
      description: 'This course teaches kids how to build their own 2D games using Python. It covers game loops, sprite movements, and collision detection, perfect for budding game developers.',
      difficulty: 'Intermediate',
      duration: '7 weeks',
      author: 'Sara Abdelrahman',
      category: 'gaming',
      num_of_videos: 15,
      photo: '',
      price: 130,
      videos:['','']
    },
    {
      course_id: 106,
      title: 'Robotics Programming for Kids',
      description: 'In this course, kids will explore how to code robots to complete tasks using simple programming concepts. It’s perfect for children who love both coding and robotics.',
      difficulty: 'Advanced',
      duration: '8 weeks',
      author: 'Hassan Youssef',
      category: 'AI',
      num_of_videos: 129,
      photo: '',
      price: 70,
      videos:['','']
    },
    {
      course_id: 107,
      title: 'JavaScript Basics for Young Coders',
      description: 'An introduction to JavaScript, teaching kids how to make interactive websites. This course is ideal for kids who already have a basic understanding of HTML and CSS.',
      difficulty: 'Intermediate',
      duration: '6 weeks',
      author: 'Omar Khaled',
      category: 'web',
      num_of_videos: 88,
      photo: '',
      price: 58,
      videos:['','']
    },
    {
      course_id: 108,
      title: '3D Animation with Alice',
      description: 'Kids will learn how to create animated 3D stories and games using Alice. It’s a visual programming environment that’s great for sparking creativity in younger learners.',
      difficulty: 'Beginner',
      duration: '4 weeks',
      author: 'Layla Ibrahim',
      category: 'gaming',
      num_of_videos: 53,
      photo: '',
      price: 98,
      videos:['','']
    },
    {
      course_id: 109,
      title: 'Coding for Kids: Learn Java with Minecraft',
      description: 'This course introduces kids to Java programming by modifying the popular game Minecraft. Kids will learn basic Java coding skills while having fun in a familiar environment.',
      difficulty: 'Advanced',
      duration: '8 weeks',
      author: 'Nour El-Din',
      category: 'gaming',
      num_of_videos: 20,
      photo: '',
      price: 52,
      videos:['','']
    },
    {
      course_id: 110,
      title: 'Build Your Own Mobile App',
      description: 'In this course, kids will learn how to design and develop simple mobile apps. The course covers user interface design, logic, and basic programming concepts.',
      difficulty: 'Advanced',
      duration: '9 weeks',
      author: 'Khaled Mostafa',
      category: 'mobile',
      num_of_videos: 160,
      photo: '',
      price: 480,
      videos:['','']
    }
  ]



}
