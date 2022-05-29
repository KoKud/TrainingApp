import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isAuthenticated = false;
  private userSub!: Subscription;
  email = "";
  constructor(private authService: AuthService) {}
  
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      this.email = user.email; 
    });
  
  }
}
