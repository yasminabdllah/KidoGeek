import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecatigoryComponent } from './coursecatigory.component';

describe('CoursecatigoryComponent', () => {
  let component: CoursecatigoryComponent;
  let fixture: ComponentFixture<CoursecatigoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursecatigoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursecatigoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
