import { Course } from './../interfaces/course.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor() { }
  /*courses_data: Course[] = [
    {
      course_id: 101,
      title: 'Introduction to Scratch Programming',
      description: 'A beginner-friendly course that introduces kids to the world of programming through Scratch, a block-based programming language. Ideal for children aged 7-10.',
      difficulty: 'Beginner',
      duration: '3 weeks',
      author: 'Fatima Nabil',
      category: 'gaming',
      videos: 15,
      photo: '../../assets/coursesphoto/new.png',
      price:30
    },
    {
      course_id: 102,
      title: 'Building Games with Scratch',
      description: 'In this course, kids will learn how to create simple games using Scratch. This course focuses on enhancing creativity while teaching the basics of game development.',
      difficulty: 'Intermediate',
      duration: '4 weeks',
      author: 'Ahmed Samir',
      category: 'gaming',
      videos: 88,
      photo: '../../assets/coursesphoto/gaming2.png',
      price:60
    },
    {
      course_id: 103,
      title: 'HTML & CSS for Kids: Create Your First Website',
      description: 'This course introduces children to HTML and CSS, teaching them how to build and style their very first website. Suitable for kids aged 10-13.',
      difficulty: 'Beginner',
      duration: '5 weeks',
      author: 'Mariam Ali',
      category: 'web',
      videos: 88,
      photo: '../../assets/coursesphoto/web1.jpg',
      price:25
    },
    {
      course_id: 104,
      title: 'Introduction to Python Programming',
      description: 'A fun and interactive introduction to Python for kids. This course covers basic concepts such as variables, loops, and functions. Recommended for kids aged 12 and above.',
      difficulty: 'Beginner',
      duration: '6 weeks',
      author: 'Mohamed Hassan',
      category: 'AI',
      videos: 88,
      photo: '../../assets/coursesphoto/Rectangle 65.jpg',
      price:20
    },
    {
      course_id: 105,
      title: 'Game Development with Python',
      description: 'This course teaches kids how to build their own 2D games using Python. It covers game loops, sprite movements, and collision detection, perfect for budding game developers.',
      difficulty: 'Intermediate',
      duration: '7 weeks',
      author: 'Sara Abdelrahman',
      category: 'gaming',
      videos: 70,
      photo: '../../assets/coursesphoto/gaming5.jpg',
      price:33
    },
    {
      course_id: 106,
      title: 'Robotics Programming for Kids',
      description: 'In this course, kids will explore how to code robots to complete tasks using simple programming concepts. It’s perfect for children who love both coding and robotics.',
      difficulty: 'Advanced',
      duration: '8 weeks',
      author: 'Hassan Youssef',
      category: 'AI',
      videos: 85,
      photo: '../../assets/coursesphoto/ai2.jpg',
      price:56
    },
    {
      course_id: 107,
      title: 'JavaScript Basics for Young Coders',
      description: 'An introduction to JavaScript, teaching kids how to make interactive websites. This course is ideal for kids who already have a basic understanding of HTML and CSS.',
      difficulty: 'Intermediate',
      duration: '6 weeks',
      author: 'Omar Khaled',
      category: 'web',
      videos: 65,
      photo: '../../assets/coursesphoto/web3.png',
      price:25
    },
    {
      course_id: 108,
      title: '3D Animation with Alice',
      description: 'Kids will learn how to create animated 3D stories and games using Alice. It’s a visual programming environment that’s great for sparking creativity in younger learners.',
      difficulty: 'Beginner',
      duration: '4 weeks',
      author: 'Layla Ibrahim',
      category: 'gaming',
      videos: 120,
      photo: '../../assets/coursesphoto/Rectangle 25.png',
      price:57
    },
    {
      course_id: 109,
      title: 'Coding for Kids: Learn Java with Minecraft',
      description: 'This course introduces kids to Java programming by modifying the popular game Minecraft. Kids will learn basic Java coding skills while having fun in a familiar environment.',
      difficulty: 'Advanced',
      duration: '8 weeks',
      author: 'Nour El-Din',
      category: 'gaming',
      videos: 90,
      photo: '../../assets/coursesphoto/Rectangle 50.png',
      price:43
    },
    {
      course_id: 110,
      title: 'Build Your Own Mobile App',
      description: 'In this course, kids will learn how to design and develop simple mobile apps. The course covers user interface design, logic, and basic programming concepts.',
      difficulty: 'Advanced',
      duration: '9 weeks',
      author: 'Khaled Mostafa',
      category: 'mobile',
      videos: 160,
      photo: '../../assets/coursesphoto/Cómo enseñar español a extranjeros_ todo lo que debes saber.jfif',
      price:110
    },
    {
      course_id: 110,
      title: 'Create Cross-Platform Apps with Flutter',
      description: 'In this course, kids will learn how to design and develop simple mobile apps. The course covers user interface design, logic, and basic programming concepts.',
      difficulty: 'intermediate',
      duration: '9 weeks',
      author: 'Khaled Mostafa',
      category: 'mobile',
      videos: 160,
      photo: '../../assets/coursesphoto/Premium Photo _ School boy on video conference with a teacher on a laptop.jfif',
      price:110
    },
    {
      course_id: 110,
      title: 'Mobile Games Development with Scratch',
      description: 'In this course, kids will learn how to design and develop simple mobile apps. The course covers user interface design, logic, and basic programming concepts.',
      difficulty: 'bigginer',
      duration: '9 weeks',
      author: 'Khaled Mostafa',
      category: 'mobile',
      videos: 160,
      photo: '../../assets/coursesphoto/newg1.jfif',
      price:110
    }
  ]*/
  courses_data: Course[] = [
    
    {
      course_id: 101,
      title: 'Introduction to Scratch Programming',
      description: 'A beginner-friendly course that introduces kids to programming through Scratch.',
      difficulty: 'Beginner',
      duration: '3 weeks',
      author: 'Fatima Nabil',
      category: 'gaming',
      videos: 15,
      photo: '../../assets/coursesphoto/new.png',
      price: 30
    },
    {
      course_id: 102,
      title: 'Building Games with Scratch',
      description: 'Create simple games using Scratch and enhance creativity while learning game development.',
      difficulty: 'Intermediate',
      duration: '4 weeks',
      author: 'Ahmed Samir',
      category: 'gaming',
      videos: 88,
      photo: '../../assets/coursesphoto/gaming2.png',
      price: 60
    },
    {
      course_id: 105,
      title: 'Game Development with Python',
      description: 'Build your own 2D games using Python. Learn game loops and sprite movements.',
      difficulty: 'Intermediate',
      duration: '7 weeks',
      author: 'Sara Abdelrahman',
      category: 'gaming',
      videos: 70,
      photo: '../../assets/coursesphoto/gaming5.jpg',
      price: 33
    },
    {
      course_id: 108,
      title: '3D Animation with Alice',
      description: 'Create animated 3D stories using Alice and spark creativity in a visual environment.',
      difficulty: 'Beginner',
      duration: '4 weeks',
      author: 'Layla Ibrahim',
      category: 'gaming',
      videos: 120,
      photo: '../../assets/coursesphoto/Rectangle 25.png',
      price: 57
    },
    {
      course_id: 109,
      title: 'Coding for Kids: Learn Java with Minecraft',
      description: 'Learn Java programming by modifying Minecraft.',
      difficulty: 'Advanced',
      duration: '8 weeks',
      author: 'Nour El-Din',
      category: 'gaming',
      videos: 90,
      photo: '../../assets/coursesphoto/Rectangle 50.png',
      price: 43
    },
    {
      course_id: 111,
      title: 'Advanced Game Development with Unity',
      description: 'Master game development in Unity and create complex 3D games.',
      difficulty: 'Advanced',
      duration: '10 weeks',
      author: 'Mina Farag',
      category: 'gaming',
      videos: 100,
      photo: '../../assets/coursesphoto/game.jfif',
      price: 85
    },
    {
      course_id: 103,
      title: 'HTML & CSS for Kids: Create Your First Website',
      description: 'Learn HTML and CSS to build and style a website.',
      difficulty: 'Beginner',
      duration: '5 weeks',
      author: 'Mariam Ali',
      category: 'web',
      videos: 88,
      photo: '../../assets/coursesphoto/web1.jpg',
      price: 25
    },
    {
      course_id: 107,
      title: 'JavaScript Basics for Young Coders',
      description: 'Introduction to JavaScript, teaching how to make interactive websites.',
      difficulty: 'Intermediate',
      duration: '6 weeks',
      author: 'Omar Khaled',
      category: 'web',
      videos: 65,
      photo: '../../assets/coursesphoto/web3.png',
      price: 25
    },
    {
      course_id: 112,
      title: 'Web Development with Bootstrap',
      description: 'Learn how to create responsive websites using Bootstrap.',
      difficulty: 'Intermediate',
      duration: '6 weeks',
      author: 'Aya Soliman',
      category: 'web',
      videos: 50,
      photo: '../../assets/coursesphoto/web2.png ',
      price: 35
    },
    {
      course_id: 113,
      title: 'Advanced HTML & CSS Techniques',
      description: 'Advanced concepts of HTML and CSS to build complex, responsive layouts.',
      difficulty: 'Advanced',
      duration: '8 weeks',
      author: 'Omar Khaled',
      category: 'web',
      videos: 70,
      photo: '../../assets/coursesphoto/webfinal.jpeg',
      price: 40
    },


    {
      course_id: 104,
      title: 'Introduction to Python Programming',
      description: 'Fun and interactive Python introduction covering variables and loops.',
      difficulty: 'Beginner',
      duration: '6 weeks',
      author: 'Mohamed Hassan',
      category: 'AI',
      videos: 88,
      photo: '../../assets/coursesphoto/Rectangle 65.jpg',
      price: 20
    },
    {
      course_id: 106,
      title: 'Robotics Programming for Kids',
      description: 'Explore coding robots using programming concepts. Ideal for kids who love coding and robotics.',
      difficulty: 'Advanced',
      duration: '8 weeks',
      author: 'Hassan Youssef',
      category: 'AI',
      videos: 85,
      photo: '../../assets/coursesphoto/ai2.jpg',
      price: 56
    },
    {
      course_id: 116,
      title: 'AI and Machine Learning for Teens',
      description: 'Introduction to machine learning and artificial intelligence.',
      difficulty: 'Intermediate',
      duration: '10 weeks',
      author: 'Nour Ahmed',
      category: 'AI',
      videos: 75,
      photo: '../../assets/coursesphoto/any.jfif',
      price: 60
    },
    {
      course_id: 117,
      title: 'Python AI: Create Your First AI App',
      description: 'Learn how to build basic AI applications using Python.',
      difficulty: 'Advanced',
      duration: '9 weeks',
      author: 'Fatima Khaled',
      category: 'AI',
      videos: 90,
      photo: '../../assets/coursesphoto/newg1.jfif',
      price: 55
    },
    {
      course_id: 118,
      title: 'Data Science for Beginners',
      description: 'Introduction to data science using Python.',
      difficulty: 'Intermediate',
      duration: '8 weeks',
      author: 'Ahmed Hassan',
      category: 'AI',
      videos: 80,
      photo: '../../assets/coursesphoto/A young boy using a laptop possibly doing homework or browsing online _ Premium AI-generated image.jfif',
      price: 50
    },
    {
      course_id: 119,
      title: 'AI and Robotics: Build Intelligent Robots',
      description: 'Learn how AI is used in robotics and build intelligent robots.',
      difficulty: 'Advanced',
      duration: '10 weeks',
      author: 'Hassan Youssef',
      category: 'AI',
      videos: 85,
      photo: '../../assets/coursesphoto/Rectangle 50 (2).jpg',
      price: 65
    },
  
    // Mobile Category (6 courses)
    {
      course_id: 110,
      title: 'Build Your Own Mobile App',
      description: 'Learn to design and develop simple mobile apps covering UI, logic, and programming.',
      difficulty: 'Advanced',
      duration: '9 weeks',
      author: 'Khaled Mostafa',
      category: 'mobile',
      videos: 160,
      photo: '../../assets/coursesphoto/Cómo enseñar español a extranjeros_ todo lo que debes saber.jfif',
      price: 110
    },
    {
      course_id: 120,
      title: 'Introduction to Swift: Building iOS Apps',
      description: 'Learn how to build iOS apps using Swift for beginners.',
      difficulty: 'Beginner',
      duration: '6 weeks',
      author: 'Layla Ahmed',
      category: 'mobile',
      videos: 80,
      photo: '../../assets/coursesphoto/web2.png',
      price: 50
    },
    {
      course_id: 121,
      title: 'Create Cross-Platform Apps with Flutter',
      description: 'Learn to build mobile apps with Flutter for both iOS and Android.',
      difficulty: 'Intermediate',
      duration: '9 weeks',
      author: 'Khaled Mostafa',
      category: 'mobile',
      videos: 160,
      photo: '../../assets/coursesphoto/Rectangle 25.png',
      price: 110
    },
    {
      course_id: 122,
      title: 'Mobile Games Development with Scratch',
      description: 'Learn how to design and develop mobile games using Scratch.',
      difficulty: 'Beginner',
      duration: '9 weeks',
      author: 'Khaled Mostafa',
      category: 'mobile',
      videos: 160,
      photo:"../../assets/coursesphoto/Premium Photo _ School boy on video conference with a teacher on a laptop.jfif",
      price:20
    }]
  
  filteredCourses: Course[] = [];
  ngOnInit(): void {
    // Initialize filteredCourses with all courses
    this.filteredCourses = this.courses_data;
  }
  
  filterCoursesByCategory(category: string):void{
    this.filteredCourses = this.courses_data.filter((course) => course.category === category);
  }
 
 
}
