import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterpagesComponent } from './footerpages/footerpages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogComponent } from './blog/blog.component';
import { CommunityComponent } from './community/community.component';
import { CourseComponent } from './course/course.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { QuesBlogComponent } from './blog/ques-blog/ques-blog.component';
import { BlogCardComponent } from './blog/blog-card/blog-card.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterpagesComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    BlogComponent,
    CommunityComponent,
    CourseComponent,
    TopHeaderComponent,
    QuesBlogComponent,
    BlogCardComponent,
    SearchComponent,
    SearchResultComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
