import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user.model';
import { Training } from '../../shared/training.model';
import { TrainingService } from '../../trainings/trainings.service';



@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.css']
})
export class HistoryDetailsComponent implements OnInit {
  user!: User;
  private userSub!: Subscription;
  

  trainings: Training[] = [];
  constructor(private trainingService: TrainingService,
    private authService: AuthService) { }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  ngOnInit(): void {


    this.userSub = this.authService.user.subscribe(user => {
      this.user = user;
      for (let trainingId of this.user.trainingsList) {
        this.trainings.push(this.trainingService.getTraining(trainingId)!);
      }
    });
  }

}
