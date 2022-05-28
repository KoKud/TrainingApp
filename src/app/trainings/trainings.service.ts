import { Subject } from "rxjs";
import { Training } from "../shared/training.model";

export class TrainingService {
  trainingsChanged = new Subject<Training[]>();
  private trainings: Training[] = [
    new Training('General','https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg','Template description',[1, 2,3]),
    new Training('Legs','https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg','Template description',[4, 5,6]),
  ];

  getTrainings() {
    return this.trainings;
  }
  getTraining(index: number) {
    return this.trainings[index];
  }
}
