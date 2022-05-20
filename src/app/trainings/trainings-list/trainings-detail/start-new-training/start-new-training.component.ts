import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-start-new-training',
  templateUrl: './start-new-training.component.html',
  styleUrls: ['./start-new-training.component.css']
})
export class StartNewTrainingComponent implements OnInit {
  countDown!: Subscription;
  counter = 30;
  tick = 1000;
  constructor() { }

  ngOnInit(): void {
    this.countDown = timer(0, this.tick).subscribe(() => {
      if (this.counter > 0) --this.counter;
    });
  }

}
