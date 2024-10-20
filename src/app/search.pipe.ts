import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../interfaces/course.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(filtered_corses:Course[], term:string):Course[] {

    return filtered_corses.filter((course)=>course.title.toLowerCase().includes(term.toLowerCase()));
  }

}
