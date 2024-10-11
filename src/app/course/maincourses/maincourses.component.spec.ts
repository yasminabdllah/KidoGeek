import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincoursesComponent } from './maincourses.component';

describe('MaincoursesComponent', () => {
  let component: MaincoursesComponent;
  let fixture: ComponentFixture<MaincoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaincoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaincoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
