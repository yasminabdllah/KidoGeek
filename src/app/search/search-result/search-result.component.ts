import { Course } from '../../../interfaces/course.interface';
import { CoursesService } from './../../../services/courses.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent implements OnInit, OnChanges{
  @Input()
  searchText: string = "";
  courses_data: Course[] = [];
  cours_data_after_search:Course[]=[];


  constructor(private Courses:CoursesService){
    this.courses_data = Courses.courses_data;
  }

  ngOnInit(): void {
    this.filterCourses();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchText']) {
    this.filterCourses();
    }
  }
  filterCourses() {
    if (this.searchText === '') {
      this.cours_data_after_search = [];
    } else {
      this.cours_data_after_search = this.courses_data.filter(course =>
        course.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        course.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
        course.author.toLowerCase().includes(this.searchText.toLowerCase()) ||
        course.category.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }


}
