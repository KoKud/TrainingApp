import { Component, Input, OnInit } from '@angular/core';

import { Training } from '../../../shared/training.model';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent implements OnInit {
  @Input()training!: Training;
  @Input() index!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
