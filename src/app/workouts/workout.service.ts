import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { Workout } from "../shared/workout.model";

export class WorkoutService {
  workoutsChanged = new Subject<Workout[]>();
  private workouts: Workout[] = [
  ];

  getWorkouts() {
    return this.workouts.slice();
  }
  getWorkout(index: number) {
    return this.workouts[index];
  }

  setWorkouts(workout: Workout[]){
    this.workouts = workout;
    this.workoutsChanged.next(this.workouts.slice());
  }

  addWorkout(workout: Workout) {
    this.workouts.push(workout);
    this.workoutsChanged.next(this.workouts.slice());
  }
  updateWorkout(index: number, newWorkout: Workout) {
    this.workouts[index] = newWorkout;
    this.workoutsChanged.next(this.workouts.slice());
  }
  deleteWorkout(index: number) {
    this.workouts.splice(index, 1);
    this.workoutsChanged.next(this.workouts.slice());
  }
}
