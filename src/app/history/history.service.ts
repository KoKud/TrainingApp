import { History } from "../shared/history.model";
import { Training } from "../shared/training.model";

export class HistoryService {
  private historys: Map<string, History> = new Map<string, History>([
    ['001', new History(1, new Training("training", 'https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg', "text", [1, 2, 3]))],
    ['002', new History(2, new Training("training2", 'https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg', "text", [4, 2, 3]))]
  ]);
  getHistorys() {
    return this.historys;
  }
  getHistory(index: string) {
    return this.historys.get(index);
  }
}
