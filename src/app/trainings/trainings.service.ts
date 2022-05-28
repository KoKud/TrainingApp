import { Subject } from "rxjs";
import { Training } from "../shared/training.model";

export class TrainingService {
  trainingsChanged = new Subject<Training[]>();
  private trainings: Training[] = [
  ];

  getTrainings() {
    return this.trainings;
  }
  getTraining(index: number) {
    return this.trainings[index];
  }
  setTrainings(training: Training[]){
    this.trainings = training;
    this.trainingsChanged.next(this.trainings.slice());
  }
}
