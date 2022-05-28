import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Workout } from "src/app/shared/workout.model";
import { WorkoutService } from "../workout.service";

@Component({
  selector: "app-workout-details",
  templateUrl: "./workout-details.component.html",
  styleUrls: ["./workout-details.component.css"],
})
export class WorkoutDetailsComponent implements OnInit {
  workout!: Workout;
  id!: number;

  constructor(
    private workoutService: WorkoutService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.workout = this.workoutService.getWorkout(this.id)!;
    });
  }
  onDeleteWorkout() {
    this.workoutService.deleteWorkout(this.id);
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
