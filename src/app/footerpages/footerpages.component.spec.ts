import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterpagesComponent } from './footerpages.component';

describe('FooterpagesComponent', () => {
  let component: FooterpagesComponent;
  let fixture: ComponentFixture<FooterpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterpagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
