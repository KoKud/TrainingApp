import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { TrainingService } from "../trainings/trainings.service";
import { WorkoutService } from "../workouts/workout.service";
import { Training } from "./training.model";
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
    this.http
      .put(
        "https://workout-app-r-default-rtdb.firebaseio.com/workouts.json",
        workouts
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
  storeTrainings() {
    const trainings = this.trainigService.getTrainings();
    this.http
      .put(
        "https://workout-app-r-default-rtdb.firebaseio.com/trainings.json",
        trainings
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchTrainings() {
    this.http
      .get<Training[]>(
        "https://workout-app-r-default-rtdb.firebaseio.com/trainings.json"
      )
      .pipe(
        tap((trainings) => {
          this.trainigService.setTrainings(trainings);
        })
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  addNewTraining(trainingNumber: number) {
    this.authService.user
      .pipe(
        take(1),
        exhaustMap((user) => {
          user.trainings = user.trainings+1;
          user.trainingsList.push(trainingNumber);

          return this.http.patch(
            "https://workout-app-r-default-rtdb.firebaseio.com/users/" +
              user.id +
              ".json",
            {
              trainings: user.trainings,
              trainingsList: user.trainingsList,
            }
          );
        }),
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  getAllUsersData(){

  }
}
