import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../interfaces/course.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(courses_data:Course[], term:string): any {

    return courses_data.filter((course)=>course.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
  }

}
