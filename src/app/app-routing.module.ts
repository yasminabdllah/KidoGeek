import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogComponent } from './blog/blog.component';
import { CourseComponent } from './course/course.component';
import { CommunityComponent } from './community/community.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent ,title:'Home'},
  { path: 'about', component: AboutComponent,title:'About' },
  { path: 'courses', component: CourseComponent,title:'courses' },
  { path: 'blog', component: BlogComponent,title:'blog' },
  { path: 'community', component: CommunityComponent,title:'community' },
  { path: '**', component: NotFoundComponent ,title:'Error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
