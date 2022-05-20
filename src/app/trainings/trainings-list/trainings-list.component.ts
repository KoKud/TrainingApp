import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Training } from "src/app/shared/training.model";
import { TrainingService } from "../trainings.service";

@Component({
  selector: "app-trainings-list",
  templateUrl: "./trainings-list.component.html",
  styleUrls: ["./trainings-list.component.css"],
})
export class TrainingsListComponent implements OnInit {
  subscription!: Subscription;
  trainings!: Map<string, Training>;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.trainings = this.trainingService.getTrainings();
    this.subscription = this.trainingService.trainingsChanged.subscribe(
      (trainings: Map<string, Training>) => {
        this.trainings = trainings;
      }
    );
  }
}
