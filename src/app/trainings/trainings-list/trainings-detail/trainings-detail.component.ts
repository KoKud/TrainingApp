import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Training } from 'src/app/shared/training.model';
import { Workout } from 'src/app/shared/workout.model';
import { WorkoutService } from 'src/app/workouts/workout.service';
import { TrainingService } from '../../trainings.service';

@Component({
  selector: 'app-trainings-detail',
  templateUrl: './trainings-detail.component.html',
  styleUrls: ['./trainings-detail.component.css']
})
export class TrainingsDetailComponent implements OnInit {
  training!: Training;
  id!: string;
  workouts: Workout[] = [];

  constructor(private trainingService: TrainingService,
              private workoutService: WorkoutService,
              private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.training = this.trainingService.getTraining(this.id)!;
        this.workouts = [];
        for(let workoutId of this.training.workouts){
          this.workouts.push(this.workoutService.getWorkout(workoutId)!);
        }
      }
    );
  }
}
