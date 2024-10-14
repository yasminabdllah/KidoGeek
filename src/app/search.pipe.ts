import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../interfaces/course.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(filtered_corses:Course[], term:string): any {

    return filtered_corses.filter((course)=>course.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
  }

}
