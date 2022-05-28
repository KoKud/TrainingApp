import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { TrainingService } from '../trainings/trainings.service';
import { WorkoutService } from '../workouts/workout.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private workoutService: WorkoutService,
    private trainigService: TrainingService,
    private authService: AuthService
  ) {}

  
}
