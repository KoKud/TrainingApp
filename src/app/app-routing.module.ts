import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HistoryDetailsComponent } from "./history/history-details/history-details.component";
import { HistoryComponent } from "./history/history.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { WorkoutDetailsComponent } from "./workouts/workout-details/workout-details.component";
import { WorkoutEditComponent } from "./workouts/workout-edit/workout-edit.component";
import { WorkoutsComponent } from "./workouts/workouts.component";

const appRoutes : Routes = [
    {path: '', component: HomePageComponent},
    {path: 'workouts', component: WorkoutsComponent, children:[
        {path: 'new', component: WorkoutEditComponent},
        {path: ':id', component: WorkoutDetailsComponent},
        {path: ':id/edit', component: WorkoutEditComponent},
    ]},
    {path: 'history', component: HistoryComponent, children:[
        {path: ':id', component: HistoryDetailsComponent}
    ]},
    {path: 'leaderboard', component:  LeaderboardComponent},
    {path: 'about-us', component: AboutComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule{}