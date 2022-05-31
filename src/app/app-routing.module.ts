import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { HistoryDetailsComponent } from "./history/history-details/history-details.component";
import { HistoryComponent } from "./history/history.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { LeaderboardDetailsComponent } from "./leaderboard/leaderboard-details/leaderboard-details.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { StartNewTrainingComponent } from "./trainings/trainings-list/trainings-detail/start-new-training/start-new-training.component";
import { TrainingsDetailComponent } from "./trainings/trainings-list/trainings-detail/trainings-detail.component";
import { TrainingsStartComponent } from "./trainings/trainings-list/trainings-start/trainings-start.component";
import { TrainingsComponent } from "./trainings/trainings.component";
import { WorkoutDetailsComponent } from "./workouts/workout-details/workout-details.component";
import { WorkoutEditComponent } from "./workouts/workout-edit/workout-edit.component";
import { WorkoutStartComponent } from "./workouts/workout-start/workout-start.component";
import { WorkoutsComponent } from "./workouts/workouts.component";

const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "auth", component: AuthComponent},
  { path: "auth/:type", component: AuthComponent},
  {
    path: "training",
    canActivate: [AuthGuard],
    component: TrainingsComponent,
    children: [
      { path: "", component: TrainingsStartComponent },
      {
        path: ":id",
        component: TrainingsDetailComponent,
      },
      {
        path: ":id/start",
        component: StartNewTrainingComponent,
      },
    ],
  },
  {
    path: "workouts",
    component: WorkoutsComponent,
    children: [
      { path: "", component: WorkoutStartComponent },
      {
        path: "new",
        canActivate: [AuthGuard],
        component: WorkoutEditComponent,
      },
      {
        path: ":id",
        canActivate: [AuthGuard],
        component: WorkoutDetailsComponent,
      },
      {
        path: ":id/edit",
        canActivate: [AuthGuard],
        component: WorkoutEditComponent,
      },
    ],
  },
  {
    path: "history",
    component: HistoryComponent,
    canActivate: [AuthGuard],
    children: [{ path: ":id", component: HistoryDetailsComponent }],
  },
  {
    path: "leaderboard",
    component: LeaderboardComponent,
    children: [{ path: ":id", component: LeaderboardDetailsComponent }],
  },
  { path: "about-us", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
