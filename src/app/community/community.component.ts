import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {
  userData: User[] = [];
  constructor(private userService: UsersService) {
    this.userData = this.userService.users_data;
  }

  pageSize = 2;
  currentPage = 1;
  paginateduser: User[]=[];


  ngOnInit() {
    this.setPage(1);
  }

  get totalPages() {
    return Array(Math.ceil(this.userData.length / this.pageSize)).
    fill(0).map((x, i) => i + 1);
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    this.paginateduser = this.userData.slice(startIndex, startIndex + this.pageSize);
  }
}
