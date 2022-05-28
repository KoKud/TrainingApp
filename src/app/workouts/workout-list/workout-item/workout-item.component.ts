import { Component, Input, OnInit } from '@angular/core';
import { Workout } from 'src/app/shared/workout.model';

@Component({
  selector: 'app-workout-item',
  templateUrl: './workout-item.component.html',
  styleUrls: ['./workout-item.component.css']
})
export class WorkoutItemComponent implements OnInit {
  @Input()workout!: Workout;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
