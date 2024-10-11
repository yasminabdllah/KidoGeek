
import { Course } from './../../../interfaces/course.interface';
import { Component } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-maincourses',
  templateUrl: './maincourses.component.html',
  styleUrl: './maincourses.component.css'
})
export class MaincoursesComponent {
  courses: any[] = [];
  constructor(public _coursesservices:CoursesService){}
  courses_cat:Course[]=[];
  term:string=""
  getCoursesByCategory(category: string): void {
    this._coursesservices.filterCoursesByCategory(category);
    this.courses = this._coursesservices.filteredCourses; // Assign the filtered courses to the local array
  }
  
 
}


