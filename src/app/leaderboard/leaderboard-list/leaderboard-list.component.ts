import { Component, OnInit } from '@angular/core';
import { Leaderboard } from '../../shared/leaderboard.model';
import { LeaderboardService } from '../leaderboard.service';

@Component({
  selector: 'app-leaderboard-list',
  templateUrl: './leaderboard-list.component.html',
  styleUrls: ['./leaderboard-list.component.css']
})
export class LeaderboardListComponent implements OnInit {
  leaderboards!: Map<string, Leaderboard>;

  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit(): void {
    this.leaderboards = this.leaderboardService.getLeaderboards();
  }

}
