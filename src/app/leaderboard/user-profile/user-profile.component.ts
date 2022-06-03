import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../shared/user-profile.model';
import { UserProfileService } from './user-profile.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user.model';
import { Training } from '../../shared/training.model';
import { TrainingService } from '../../trainings/trainings.service';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
  })




export class UserProfileComponent implements OnInit {
  userprofile!: UserProfile;

  user!: User;
  private userSub!: Subscription;

  constructor( private authService: AuthService ) {
  } 

  ngOnInit(): void {
      
    this.userSub = this.authService.user.subscribe(user => { 
    this.user = user; 
    })
  
       
  }
} 