import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HistoryComponent } from './history/history.component';
import { AboutComponent } from './about/about.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { WorkoutDetailsComponent } from './workouts/workout-details/workout-details.component';
import { WorkoutEditComponent } from './workouts/workout-edit/workout-edit.component';
import { HistoryDetailsComponent } from './history/history-details/history-details.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkoutService } from './workouts/workout.service';
import { leaderboardService } from './leaderboard/leaderboard.service';
import { WorkoutListComponent } from './workouts/workout-list/workout-list.component';
import { WorkoutItemComponent } from './workouts/workout-list/workout-item/workout-item.component';
import { WorkoutStartComponent } from './workouts/workout-start/workout-start.component';
import { LeaderboardListComponent } from './leaderboard/leaderboard-list/leaderboard-list.component';
import { LeaderboardItemComponent } from './leaderboard/leaderboard-list/leaderboard-item/leaderboard-item.component';
import { LeaderboardDetailsComponent } from './leaderboard/leaderboard-details/leaderboard-details.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingsListComponent } from './trainings/trainings-list/trainings-list.component';
import { TrainingsItemComponent } from './trainings/trainings-list/trainings-item/trainings-item.component';
import { TrainingService } from './trainings/trainings.service';
import { TrainingsDetailComponent } from './trainings/trainings-list/trainings-detail/trainings-detail.component';
import { TrainingsStartComponent } from './trainings/trainings-list/trainings-start/trainings-start.component';
import { StartNewTrainingComponent } from './trainings/trainings-list/trainings-detail/start-new-training/start-new-training.component';
<<<<<<< HEAD
import { UserProfileComponent } from './leaderboard/user-profile/user-profile.component';
import { HomePageLoggedComponent } from './home-page/home-page-logged/home-page-logged.component';
import { HomePageLoggedOutComponent } from './home-page/home-page-logged-out/home-page-logged-out.component';
=======
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> fb7682b (Created new workout page what closes #21)


@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent, FooterComponent, HeaderComponent, HomePageComponent, HistoryComponent, AboutComponent, WorkoutsComponent, LeaderboardComponent, WorkoutDetailsComponent, WorkoutEditComponent, HistoryDetailsComponent, WorkoutListComponent, WorkoutItemComponent, WorkoutStartComponent, LeaderboardListComponent, LeaderboardItemComponent, LeaderboardDetailsComponent , TrainingsComponent, TrainingsListComponent, TrainingsItemComponent, TrainingsDetailComponent, TrainingsStartComponent, StartNewTrainingComponent, UserProfileComponent, HomePageLoggedComponent, HomePageLoggedOutComponent
=======
    AppComponent, FooterComponent, HeaderComponent, HomePageComponent, HistoryComponent, AboutComponent, WorkoutsComponent, LeaderboardComponent, WorkoutDetailsComponent, WorkoutEditComponent, HistoryDetailsComponent, WorkoutListComponent, WorkoutItemComponent, WorkoutStartComponent, TrainingsComponent, TrainingsListComponent, TrainingsItemComponent, TrainingsDetailComponent, TrainingsStartComponent, StartNewTrainingComponent, SignInComponent, SignUpComponent
>>>>>>> fb7682b (Created new workout page what closes #21)
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [WorkoutService, leaderboardService, TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
