import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAboutComponent } from './history-about.component';

describe('HistoryAboutComponent', () => {
  let component: HistoryAboutComponent;
  let fixture: ComponentFixture<HistoryAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
