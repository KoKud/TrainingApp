import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsDetailComponent } from './trainings-detail.component';

describe('TrainingsDetailComponent', () => {
  let component: TrainingsDetailComponent;
  let fixture: ComponentFixture<TrainingsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
