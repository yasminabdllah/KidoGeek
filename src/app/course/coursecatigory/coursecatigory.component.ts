import { Component, Input, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CoursesService } from '../../../services/courses.service';


@Component({
  selector: 'app-coursecatigory',
  templateUrl: './coursecatigory.component.html',
  styleUrl: './coursecatigory.component.css'
})
export class CoursecatigoryComponent {
  constructor(public _corsesserv:CoursesService){

  }
  

  course_catigory:any[]=[
    {
      catigory:"Web Development",
      Title:"web",
      describtion:"This course introduces young learners to the exciting world of web development! Students will learn to build their very own websites from scratch using HTML, CSS, and JavaScript. ",
      photo:"../../assets/coursesphoto/webfinal.jpeg",
      hours:30 ,
      raiting:[1,2,3,4],
      age:"8-18 years"
    }
    ,
    
   
    {
      catigory:"Mobile APP",
      Title:"mobile",
      describtion:"This course empowers young creators to turn their ideas into reality by building their very own mobile applications! Students will learn the basics of app development, starting with simple drag-and-drop tools and advancing to coding with languages like JavaScript.",
      photo:"../../assets/coursesphoto/Premium Photo _ School boy on video conference with a teacher on a laptop.jfif",
      hours:12 ,
      raiting:[1,2,3,4,5],
      age:"8-18 years"
    },
    {
      catigory:"AI",
      Title:"AI",
      describtion:"In this course, young learners will step into the fascinating world of Artificial Intelligence! Designed to introduce the core concepts of AI in a fun and interactive way, this course covers everything from machine learning and robotics to chatbots and computer vision.",
      photo:"../../assets/coursesphoto/ai.jpg",
      hours:16,
      raiting:[1,2,3,4],
      age:"8-18 years"
    },
    {
      catigory:"Gming Development",
      Title:"gaming",
      describtion:"This course introduces young game enthusiasts to the thrilling world of game development! Students will learn how to design and build their very own games from scratch using beginner-friendly tools like Scratch or Unity.",
      photo:"../../assets/coursesphoto/Rectangle 50.png",
      hours:30 ,
      raiting:[1,2,3,4,5],
      age:"8-18 years"
    }
  ]
  
  filterCourses(category: string):void {
    this._corsesserv.filterCoursesByCategory(category);
  }
  

}
