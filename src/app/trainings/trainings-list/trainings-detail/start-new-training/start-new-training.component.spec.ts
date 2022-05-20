import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNewTrainingComponent } from './start-new-training.component';

describe('StartNewTrainingComponent', () => {
  let component: StartNewTrainingComponent;
  let fixture: ComponentFixture<StartNewTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartNewTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartNewTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
