import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { Workout } from "src/app/shared/workout.model";
import { WorkoutService } from "../workout.service";

@Component({
  selector: "app-workout-details",
  templateUrl: "./workout-details.component.html",
  styleUrls: ["./workout-details.component.css"],
})
export class WorkoutDetailsComponent implements OnInit, OnDestroy {
  workout!: Workout;
  id!: number;
  isAuthenticated = false;
  private userSub!: Subscription;

  constructor(
    private workoutService: WorkoutService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {}
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.workout = this.workoutService.getWorkout(this.id)!;
    });
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }
  onDeleteWorkout() {
    this.workoutService.deleteWorkout(this.id);
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
