import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Leaderboard } from '../../shared/leaderboard.model';
import { LeaderboardService } from '../leaderboard.service';

@Component({
  selector: 'app-leaderboard-list',
  templateUrl: './leaderboard-list.component.html',
  styleUrls: ['./leaderboard-list.component.css']
})
export class LeaderboardListComponent implements OnInit {
  leaderboards!: Leaderboard[];
  subscription!: Subscription;

  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit(): void {
    this.leaderboards = this.leaderboardService.getLeaderboards();
    this.subscription = this.leaderboardService.leaderboardChanged.subscribe(
      (leader: Leaderboard[]) => {
        this.leaderboards = leader;
      }
    );
  }
}
