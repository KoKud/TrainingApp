import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/shared/workout.model';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  workouts!: Map<string, Workout>;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.workouts = this.workoutService.getWorkouts();
  }

}
