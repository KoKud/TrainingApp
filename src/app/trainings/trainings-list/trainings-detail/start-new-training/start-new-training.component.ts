import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription, timer } from "rxjs";
import { Training } from "src/app/shared/training.model";
import { Workout } from "src/app/shared/workout.model";
import { TrainingService } from "src/app/trainings/trainings.service";
import { WorkoutService } from "src/app/workouts/workout.service";

@Component({
  selector: "app-start-new-training",
  templateUrl: "./start-new-training.component.html",
  styleUrls: ["./start-new-training.component.css"],
})
export class StartNewTrainingComponent implements OnInit {
  countDown!: Subscription;
  private practiseTime = 30;
  private restTime = 15;
  private tick = 1000;
  private isDetailSaved = false;

  counter = 15;
  displayProgress = 100;
  isRestTime = true;

  training!: Training;
  id!: string;
  workouts: Workout[] = [];
  currentWorkoutId = 0;

  constructor(
    private trainingService: TrainingService,
    private workoutService: WorkoutService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.training = this.trainingService.getTraining(this.id)!;
      this.workouts = [];
      for (let workoutId of this.training.workouts) {
        this.workouts.push(this.workoutService.getWorkout(workoutId)!);
      }
      this.currentWorkoutId = 0;
    });
    this.startWorkout();
  }
  private startWorkout() {
    this.countDown = timer(0, this.tick).subscribe(() => {
      if (this.workouts.length > this.currentWorkoutId) {
        if (this.counter == 0 && !this.isRestTime) {
          this.isRestTime = true;
          this.currentWorkoutId++;
          this.counter = this.restTime;
        }
        if (this.counter == 0 && this.isRestTime) {
          this.isRestTime = false;
          this.counter = this.practiseTime;
        }

        --this.counter;
        var maxTimeValue = this.isRestTime ? this.restTime : this.practiseTime;
        this.displayProgress = (this.counter / maxTimeValue) * 100;
      } else {
        this.saveWorkoutDetails();
      }
    });
  }
  private saveWorkoutDetails() {
    if (this.isDetailSaved) return;
    ///TODO saving workout details
    this.isDetailSaved = true;
  }
}
