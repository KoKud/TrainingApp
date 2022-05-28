import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { TrainingService } from "../trainings/trainings.service";
import { WorkoutService } from "../workouts/workout.service";
import { Workout } from "./workout.model";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private workoutService: WorkoutService,
    private trainigService: TrainingService,
    private authService: AuthService
  ) {}

  storeWorkouts() {
    const workouts = this.workoutService.getWorkouts();
    this.authService.user
      .pipe(
        take(1),
        exhaustMap((user) => {
          return this.http.put(
            "https://workout-app-r-default-rtdb.firebaseio.com/workouts.json",
            workouts,
            {
              params: new HttpParams().set("auth", user.token!),
            }
          );
        })
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchWorkouts() {
    this.http
      .get<Workout[]>(
        "https://workout-app-r-default-rtdb.firebaseio.com/workouts.json"
      )
      .pipe(
        tap((workouts) => {
          this.workoutService.setWorkouts(workouts);
        })
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
