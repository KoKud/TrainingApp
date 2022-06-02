import { Component, OnInit } from '@angular/core';
import { History } from '../../shared/history.model';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.css']
})
export class HistoryDetailsComponent implements OnInit {
  history!: Map<string, History>;
  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.history = this.historyService.getHistorys();
    
  }

}
