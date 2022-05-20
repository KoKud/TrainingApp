import { Subject } from "rxjs";
import { Training } from "../shared/training.model";

export class TrainingService {
  trainingsChanged = new Subject<Map<string, Training>>();
  private trainings: Map<string, Training> = new Map<string, Training>([
    ['001', new Training('General','https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg','Template description',['001', '002','003'])],
    ['002', new Training('Legs','https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_960_720.jpg','Template description',['004', '005','006'])],
  ]);

  getTrainings() {
    return this.trainings;
  }
  getTraining(index: string) {
    return this.trainings.get(index);
  }
}
