import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { HistoryComponent } from "./history/history.component";
import { AboutComponent } from "./about/about.component";
import { WorkoutsComponent } from "./workouts/workouts.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { WorkoutDetailsComponent } from "./workouts/workout-details/workout-details.component";
import { WorkoutEditComponent } from "./workouts/workout-edit/workout-edit.component";
import { HistoryDetailsComponent } from "./history/history-details/history-details.component";
import { AppRoutingModule } from "./app-routing.module";
import { WorkoutService } from "./workouts/workout.service";
import { WorkoutListComponent } from "./workouts/workout-list/workout-list.component";
import { WorkoutItemComponent } from "./workouts/workout-list/workout-item/workout-item.component";
import { WorkoutStartComponent } from "./workouts/workout-start/workout-start.component";
import { TrainingsComponent } from "./trainings/trainings.component";
import { TrainingsListComponent } from "./trainings/trainings-list/trainings-list.component";
import { TrainingsItemComponent } from "./trainings/trainings-list/trainings-item/trainings-item.component";
import { TrainingService } from "./trainings/trainings.service";
import { TrainingsDetailComponent } from "./trainings/trainings-list/trainings-detail/trainings-detail.component";
import { TrainingsStartComponent } from "./trainings/trainings-list/trainings-start/trainings-start.component";
import { StartNewTrainingComponent } from "./trainings/trainings-list/trainings-detail/start-new-training/start-new-training.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthComponent } from "./auth/auth.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import {HttpClientModule} from '@angular/common/http'
import { HomePageLoggedComponent } from "./home-page/home-page-logged/home-page-logged.component";
import { HomePageLoggedOutComponent } from "./home-page/home-page-logged-out/home-page-logged-out.component";
import { UserProfileComponent } from "./leaderboard/user-profile/user-profile.component";
import { LeaderboardListComponent } from "./leaderboard/leaderboard-list/leaderboard-list.component";
import { LeaderboardItemComponent } from "./leaderboard/leaderboard-list/leaderboard-item/leaderboard-item.component";
import { LeaderboardService } from "./leaderboard/leaderboard.service";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    HistoryComponent,
    AboutComponent,
    WorkoutsComponent,
    LeaderboardComponent,
    WorkoutDetailsComponent,
    WorkoutEditComponent,
    HistoryDetailsComponent,
    WorkoutListComponent,
    WorkoutItemComponent,
    WorkoutStartComponent,
    TrainingsComponent,
    TrainingsListComponent,
    TrainingsItemComponent,
    TrainingsDetailComponent,
    TrainingsStartComponent,
    StartNewTrainingComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    HomePageLoggedComponent, 
    HomePageLoggedOutComponent,
    LeaderboardComponent,
    UserProfileComponent,
    LeaderboardListComponent,
    LeaderboardItemComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule],
  providers: [WorkoutService, TrainingService, AuthComponent, LeaderboardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
