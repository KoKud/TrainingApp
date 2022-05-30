import { Component, Input, OnInit } from '@angular/core';
import { Leaderboard } from '../../../shared/leaderboard.model';

@Component({
  selector: 'app-leaderboard-item',
  templateUrl: './leaderboard-item.component.html',
  styleUrls: ['./leaderboard-item.component.css']
})
export class LeaderboardItemComponent implements OnInit {
  @Input() leaderboard!: Leaderboard;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
