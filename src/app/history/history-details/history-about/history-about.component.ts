import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Training } from '../../../shared/training.model';
import { Workout } from '../../../shared/workout.model';
import { TrainingService } from '../../../trainings/trainings.service';
import { WorkoutService } from '../../../workouts/workout.service';
import { HistoryService } from '../../history.service';
import { History } from '../../../shared/history.model';

@Component({
  selector: 'app-history-about',
  templateUrl: './history-about.component.html',
  styleUrls: ['./history-about.component.css']
})
export class HistoryAboutComponent implements OnInit {
  training!: Training;
  history!: History;
  id!: string;
  workouts: Workout[] = [];

  constructor(private trainingService: TrainingService,
    private workoutService: WorkoutService,
    private historyService: HistoryService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(

      (params: Params) => {
        
        this.id = params['id'];
        this.history = this.historyService.getHistory(this.id)!;
        this.training = this.history.training;
        this.workouts = [];
        for(let workoutId of this.history.training.workouts){
          this.workouts.push(this.workoutService.getWorkout(workoutId)!);
        }
      }
    );
  }

}
