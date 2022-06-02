import { Component, Input, OnInit } from '@angular/core';
import { History } from '../../../shared/history.model';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent implements OnInit {
  @Input()history!: History;
  @Input() index!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
