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


@NgModule({
  declarations: [
    AppComponent, FooterComponent, HeaderComponent, HomePageComponent, HistoryComponent, AboutComponent, WorkoutsComponent, LeaderboardComponent, WorkoutDetailsComponent, WorkoutEditComponent, HistoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
