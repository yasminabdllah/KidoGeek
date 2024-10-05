import { Component } from '@angular/core';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  constructor(public blogs:BlogService){}
  maxLength = 100;

  toggleText(index:number) {
    this.blogs.blogs_data[index].showFullText = !this.blogs.blogs_data[index].showFullText;
  }
}
