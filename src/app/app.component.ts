import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { DataStorageService } from "./shared/data-storage.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "TrainingApp";

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
    this.dataStorageService.fetchWorkouts();
    this.dataStorageService.fetchTrainings();
    this.dataStorageService.getAllUsersData();
  }
}
