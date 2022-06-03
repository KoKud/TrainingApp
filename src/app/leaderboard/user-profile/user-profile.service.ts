import { Injectable } from '@angular/core';
import { UserProfile } from '../../shared/user-profile.model';
// przypisanie do zmiennych wartości do bazy danych 
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
private userprofile: UserProfile = new UserProfile ("nazwa" ,"https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg",52 )
getuserprofile(){
  return this.userprofile;
}

}
