import { Subject } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { Leaderboard } from "../shared/leaderboard.model";

export class LeaderboardService {
    leaderboardChanged = new Subject<Leaderboard[]>();
  private leaderboards: Leaderboard[] = [];

  getLeaderboards() {
    return this.leaderboards;
  }
  getLeaderboard(index: number) {
    return this.leaderboards[index];
  }
  setLeaderboard(user: Leaderboard[]) {
    this.leaderboards = user;
    this.leaderboardChanged.next(this.leaderboards.slice());
    this.leaderboards.sort((a, b)=>{
        return b.score-a.score;
    })
  }
}
