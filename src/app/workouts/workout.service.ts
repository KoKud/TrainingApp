import { Workout } from "../shared/workout.model";

export class WorkoutService {
    private workouts: Workout[] = [
        new Workout('001','Jumping Jacks','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg'),
        new Workout('002','Wall Sit','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg'),
        new Workout('003','Push Up','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg'),
        new Workout('004','Abdominal Crunch','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg'),
        new Workout('005','Step-Up onto Chair','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg'),
        new Workout('006','Squat','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg'),
        new Workout('007','Tricep Dip On Chair','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg'),
        new Workout('008','Plank','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg'),
        new Workout('009','High Knees Running In Place','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg'),
        new Workout('010','Lunges','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg'),
        new Workout('011','Push up and Rotation','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg'),
        new Workout('012','Side Plank','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg'),
    ];

    getWorkouts(){
        return this.workouts.slice();
    }
    getWorkout(index: number){
        return this.workouts[index];
    }
}