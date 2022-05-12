import { TestBed } from '@angular/core/testing';

import { leaderboardService } from './leaderboard.service';

describe('LeaderboardService', () => {
  let service: leaderboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(leaderboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
