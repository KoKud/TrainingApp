import { Subject } from "rxjs";
import { Workout } from "../shared/workout.model";

export class WorkoutService {
  workoutsChanged = new Subject<Workout[]>();
  private workouts: Workout[] = [
    new Workout(
      "Jumping Jacks",
      "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg",
      "Template description"
    ),

    new Workout(
      "Wall Sit",
      "https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg",
      "Template description"
    ),

    new Workout(
      "Push Up",
      "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg",
      "Template description"
    ),

    new Workout(
      "Abdominal Crunch",
      "https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg",
      "Template description"
    ),

    new Workout(
      "Step-Up onto Chair",
      "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg",
      "Template description"
    ),

    new Workout(
      "Squat",
      "https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg",
      "Template description"
    ),

    new Workout(
      "Tricep Dip On Chair",
      "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg",
      "Template description"
    ),

    new Workout(
      "Plank",
      "https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg",
      "Template description"
    ),

    new Workout(
      "High Knees Running In Place",
      "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg",
      "Template description"
    ),

    new Workout(
      "Lunges",
      "https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg",
      "Template description"
    ),

    new Workout(
      "Push up and Rotation",
      "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg",
      "Template description"
    ),

    new Workout(
      "Side Plank",
      "https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg",
      "Template description"
    ),
  ];

  getWorkouts() {
    return this.workouts.slice();
  }
  getWorkout(index: number) {
    return this.workouts[index];
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
