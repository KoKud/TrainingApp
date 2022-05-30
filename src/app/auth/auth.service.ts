import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, exhaustMap } from "rxjs/operators";
import { throwError, tap, BehaviorSubject, Subject } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  user = new BehaviorSubject<User>(null!);
  private tokenExperationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}
  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDViBhViPRk81GVp_XYXx_2PFkmtBYewfg",
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAunthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn,
            0,
            [],
            resData.email,
            "https://workout-app-r-default-rtdb.firebaseio.com/users/"
          );
          this.http
            .put(
              "https://workout-app-r-default-rtdb.firebaseio.com/users/" +
                resData.localId +
                ".json",
              {
                email: resData.email,
                id: resData.localId,
                trainings: 0,
                trainingsList: [],
                name: resData.email,
                imageUrl:
                  "https://cdn.pixabay.com/photo/2016/11/18/14/08/jetty-1834801_960_720.jpg",
              }
            )
            .subscribe((response) => {
              console.log(response);
            });
        })
      );
  }

  login(email: string, password: string) {
    var userEmail: string, id: string, token: string;
    var expiresIn: number;
    return this.http
      .post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDViBhViPRk81GVp_XYXx_2PFkmtBYewfg",
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        exhaustMap((resData) => {
          userEmail = resData.email;
          id = resData.localId;
          token = resData.idToken;
          expiresIn = +resData.expiresIn;
          return this.http.get(
            "https://workout-app-r-default-rtdb.firebaseio.com/users/" +id +".json"
          );
        }),
        tap((data: any) => {
          this.handleAunthentication(userEmail,id, token,expiresIn, data['trainings'], data['trainingsList'] ?? [], data['name'], data['imageUrl']);
        })
      );
  }

  logout() {
    this.user.next(null!);
    this.router.navigate(["/auth"]);
    localStorage.removeItem("userData");
    if (this.tokenExperationTimer) {
      clearTimeout(this.tokenExperationTimer);
    }
    this.tokenExperationTimer = null;
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      trainings: number;
      trainingsList: number[];
      _token: string;
      _tokenExpirationDate: Date;
      name: string;
      imageUrl: string;
    } = JSON.parse(localStorage.getItem("userData")!);
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate),
      userData.trainings,
      userData.trainingsList,
      userData.name,
      userData.imageUrl
    );
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  autoLogout(experationDuration: number) {
    this.tokenExperationTimer = setTimeout(() => {
      this.logout();
    }, experationDuration);
  }

  private handleAunthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number,
    trainings: number,
    trainingsList: number[],
    name: string,
    imageUrl: string
  ) {
    const expirationData = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(
      email,
      userId,
      token,
      expirationData,
      trainings,
      trainingsList,
      name,
      imageUrl
    );
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem("userData", JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = "An unknown error occurred!";
    if (!errorRes.error || !errorRes.error.error)
      return throwError(errorMessage);
    switch (errorRes.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = "This email exists already!";
        break;
      case "EMAIL_NOT_FOUND":
        errorMessage = "This email does not exist";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "This password is not correct.";
        break;
    }
    return throwError(errorMessage);
  }
}
