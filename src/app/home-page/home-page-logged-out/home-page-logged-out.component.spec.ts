import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageLoggedOutComponent } from './home-page-logged-out.component';

describe('HomePageLoggedOutComponent', () => {
  let component: HomePageLoggedOutComponent;
  let fixture: ComponentFixture<HomePageLoggedOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageLoggedOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageLoggedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
