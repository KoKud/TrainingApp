import { Subject } from "rxjs";
import { Workout } from "../shared/workout.model";

export class WorkoutService {
  workoutsChanged = new Subject<Map<string, Workout>>();
  private workouts: Map<string, Workout> = new Map<string, Workout>([
    [
      "001",
      new Workout(
        "Jumping Jacks",
        "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg",
        "Template description"
      ),
    ],
    [
      "002",
      new Workout(
        "Wall Sit",
        "https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg",
        "Template description"
      ),
    ],
    [
      "003",
      new Workout(
        "Push Up",
        "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg",
        "Template description"
      ),
    ],
    [
      "004",
      new Workout(
        "Abdominal Crunch",
        "https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg",
        "Template description"
      ),
    ],
    [
      "005",
      new Workout(
        "Step-Up onto Chair",
        "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg",
        "Template description"
      ),
    ],
    [
      "006",
      new Workout(
        "Squat",
        "https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg",
        "Template description"
      ),
    ],
    [
      "007",
      new Workout(
        "Tricep Dip On Chair",
        "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg",
        "Template description"
      ),
    ],
    [
      "008",
      new Workout(
        "Plank",
        "https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg",
        "Template description"
      ),
    ],
    [
      "009",
      new Workout(
        "High Knees Running In Place",
        "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg",
        "Template description"
      ),
    ],
    [
      "010",
      new Workout(
        "Lunges",
        "https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg",
        "Template description"
      ),
    ],
    [
      "011",
      new Workout(
        "Push up and Rotation",
        "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg",
        "Template description"
      ),
    ],
    [
      "012",
      new Workout(
        "Side Plank",
        "https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg",
        "Template description"
      ),
    ],
  ]);

  getWorkouts() {
    return this.workouts;
  }
  getWorkout(index: string) {
    return this.workouts.get(index);
  }

  addWorkout(workout: Workout) {
    this.workouts.set("todofbuid", workout);
    this.workoutsChanged.next(this.workouts);
  }
  updateWorkout(index: string, newWorkout: Workout) {
    this.workouts.set(index, newWorkout);
    this.workoutsChanged.next(this.workouts);
  }
  deleteWorkout(index: string) {
    this.workouts.delete(index);
    this.workoutsChanged.next(this.workouts);
  }
}
