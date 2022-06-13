import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../auth/user.model';
import { Training } from '../../../shared/training.model';
import { Workout } from '../../../shared/workout.model';
import { TrainingService } from '../../../trainings/trainings.service';
import { WorkoutService } from '../../../workouts/workout.service';


@Component({
  selector: 'app-history-about',
  templateUrl: './history-about.component.html',
  styleUrls: ['./history-about.component.css']
})
export class HistoryAboutComponent implements OnInit {
  training!: Training;
  
  id!: number;
  workouts: Workout[] = [];
  user!: User;
  private userSub!: Subscription;

  constructor(private trainingService: TrainingService,
    private workoutService: WorkoutService,
   
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(

      (params: Params) => {
        
        this.id = +params['id'];
        this.userSub = this.authService.user.subscribe(user => {
          this.user = user;
          
        });
        this.id=this.user.trainingsList[this.id];
        this.training = this.trainingService.getTraining(this.id)!;
        this.workouts = [];
        for(let workoutId of this.training.workouts){
          this.workouts.push(this.workoutService.getWorkout(workoutId)!);
        }
      }
    );
  }

}
