import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsStartComponent } from './trainings-start.component';

describe('TrainingsStartComponent', () => {
  let component: TrainingsStartComponent;
  let fixture: ComponentFixture<TrainingsStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
