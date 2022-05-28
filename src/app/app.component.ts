import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "./shared/data-storage.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "TrainingApp";

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.dataStorageService.fetchWorkouts();
    this.dataStorageService.fetchTrainings();
  }
}
