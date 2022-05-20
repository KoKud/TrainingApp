import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsItemComponent } from './trainings-item.component';

describe('TrainingsItemComponent', () => {
  let component: TrainingsItemComponent;
  let fixture: ComponentFixture<TrainingsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
