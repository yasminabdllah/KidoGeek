import { Component } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { Blog } from '../../../interfaces/blog.interface';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {

  constructor(public blogs:BlogService){}
  maxLength = 100;

  pageSize = 4;
  currentPage = 1;
  paginatedBlog: Blog[]=[];

  toggleText(index:number) {
    this.blogs.blogs_data[index].showFullText = !this.blogs.blogs_data[index].showFullText;
  }


  ngOnInit() {
    this.setPage(1);
  }


  get totalPages() {
    return Array(Math.ceil(this.blogs.blogs_data.length / this.pageSize)).fill(0).map((x, i) => i + 1);
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    this.paginatedBlog = this.blogs.blogs_data.slice(startIndex, startIndex + this.pageSize);
  }
}
