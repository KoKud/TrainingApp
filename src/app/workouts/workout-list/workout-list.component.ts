import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { Workout } from "src/app/shared/workout.model";
import { WorkoutService } from "../workout.service";

@Component({
  selector: "app-workout-list",
  templateUrl: "./workout-list.component.html",
  styleUrls: ["./workout-list.component.css"],
})
export class WorkoutListComponent implements OnInit, OnDestroy {
  workouts!: Workout[];
  subscription!: Subscription;
  isAuthenticated = false;
  private userSub!: Subscription;

  constructor(private workoutService: WorkoutService, private authService: AuthService) {}
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.workouts = this.workoutService.getWorkouts();
    this.subscription = this.workoutService.workoutsChanged.subscribe(
      (workouts: Workout[]) => {
        this.workouts = workouts;
      }
    );
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }
}
