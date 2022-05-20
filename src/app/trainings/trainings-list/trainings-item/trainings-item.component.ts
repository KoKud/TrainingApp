import { Component, Input, OnInit } from '@angular/core';
import { Training } from 'src/app/shared/training.model';

@Component({
  selector: 'app-trainings-item',
  templateUrl: './trainings-item.component.html',
  styleUrls: ['./trainings-item.component.css']
})
export class TrainingsItemComponent implements OnInit {
  @Input()training!: Training;
  @Input() index!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
