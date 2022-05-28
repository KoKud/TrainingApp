import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Workout } from 'src/app/shared/workout.model';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-edit',
  templateUrl: './workout-edit.component.html',
  styleUrls: ['./workout-edit.component.css']
})
export class WorkoutEditComponent implements OnInit {
  id?: number;
  editMode = false;
  workoutForm?: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private workoutService: WorkoutService,
    private router: Router,
    private dataStorageService: DataStorageService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    const newRecipe = new Workout(
      this.workoutForm!.value['name'],
      this.workoutForm!.value['description'],
      this.workoutForm!.value['imageUrl'],
    );
    if (this.editMode) {
      this.workoutService.updateWorkout(this.id!, this.workoutForm!.value);
    }else{
      this.workoutService.addWorkout(this.workoutForm!.value);
    }
    this.dataStorageService.storeWorkouts();
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let workoutName = '';
    let workoutImagePath = '';
    let workoutDescription = '';

    if (this.editMode) {
      const workout = this.workoutService.getWorkout(this.id!);
      workoutName = workout!.name;
      workoutImagePath = workout!.imageUrl;
      workoutDescription = workout!.description;
    }

    this.workoutForm = new FormGroup({
      name: new FormControl(workoutName, Validators.required),
      imageUrl: new FormControl(workoutImagePath, Validators.required),
      description: new FormControl(workoutDescription, Validators.required),
    });
  }
}
