import { Component, OnInit} from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { Blog } from '../../../interfaces/blog.interface';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent implements OnInit {
  blogs_data :Blog[]=[];

  constructor(private blogs:BlogService){
    this.blogs_data = blogs.blogs_data;
  }
  maxLength = 100;

  pageSize = 4;
  currentPage = 1;
  paginatedBlog: Blog[]=[];

  toggleText(index:number) {
    const blogIndexInPaginatedList = this.paginatedBlog[index];
    blogIndexInPaginatedList.showFullText = !blogIndexInPaginatedList.showFullText;
  }

  ngOnInit() {
    this.setPage(1);
  }

  get totalPages() {
    return Array(Math.ceil(this.blogs_data.length / this.pageSize)).
    fill(0).map((x, i) => i + 1);
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    this.paginatedBlog = this.blogs_data.slice(startIndex, startIndex + this.pageSize);
  }
}
