import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Leaderboard } from '../../shared/leaderboard.model';
import { leaderboardService } from '../leaderboard.service';

@Component({
  selector: 'app-leaderboard-details',
  templateUrl: './leaderboard-details.component.html',
  styleUrls: ['./leaderboard-details.component.css']
})
export class LeaderboardDetailsComponent implements OnInit {
  leaderboard!: Leaderboard;
  id!: string;

  constructor(private leaderboardService: leaderboardService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.leaderboard = this.leaderboardService.getLeaderboard(this.id)!;
      }
    );
  }

}
