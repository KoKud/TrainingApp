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


@NgModule({
  declarations: [
    AppComponent, FooterComponent, HeaderComponent, HomePageComponent, HistoryComponent, AboutComponent, WorkoutsComponent, LeaderboardComponent, WorkoutDetailsComponent, WorkoutEditComponent, HistoryDetailsComponent, WorkoutListComponent, WorkoutItemComponent, WorkoutStartComponent, LeaderboardListComponent, LeaderboardItemComponent, LeaderboardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WorkoutService, leaderboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
