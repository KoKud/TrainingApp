import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Leaderboard } from '../../shared/leaderboard.model';
import { LeaderboardService } from '../leaderboard.service';

@Component({
  selector: 'app-leaderboard-details',
  templateUrl: './leaderboard-details.component.html',
  styleUrls: ['./leaderboard-details.component.css']
})
export class LeaderboardDetailsComponent implements OnInit {
  leaderboard!: Leaderboard;
  id!: number;

  constructor(private leaderboardService: LeaderboardService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.leaderboard = this.leaderboardService.getLeaderboard(this.id)!;
      }
    );
  }
}
