import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthUser } from "./login/model/AuthUser";
import { LoginData } from "./login/model/LoginData";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private http = inject(HttpClient);
  // We used behavior subject to store to emit the last value of the observable even to the new subscribers
  private user = new BehaviorSubject<AuthUser | null>(null);
  user$ = this.user.asObservable();
  userLoggedIn$ = this.user$.pipe(
    map((authUser) => {
      if (!authUser) {
        return false;
      } else
        return true;
    }
    ));
  userLoggedOut$ = this.user$.pipe(
    map((authUser) => {
      if (!authUser)
        return true;
      else
        return false;
    })
  );

  constructor() {
    this.refreshAuthState()
  }

  getAuthorizationToken() {
    return this.user.getValue()?.token.token ?? ""
  }

  login(data: LoginData): Observable<boolean> {
    return this.http.post("https://apilb.tridevs.net/api/Users/login", data).pipe(
      map((response: any) => {
        const authToken = {
          token: response.id,
          ttl: response.ttl,
        };

        const user = new AuthUser(response.userId, data.email, authToken);
        localStorage.setItem('AuthToken', JSON.stringify(authToken));
        localStorage.setItem('AuthUser', JSON.stringify(user));

        this.refreshAuthState();
        return true;


      }),
      catchError((error: any) => {
        this.refreshAuthState();
        return of(false);
      })
    );

  }

  logout() {
    const user = localStorage.getItem('AuthUser');
    if (!user) {
      return false
    }
    localStorage.removeItem('AuthToken');
    localStorage.removeItem('AuthUser');
    this.refreshAuthState()
    return true
  }

  refreshAuthState() {
    const userFound = localStorage.getItem('AuthUser');
    const token = localStorage.getItem('AuthToken');
    if (!userFound) {
      this.user.next(null);
    } else {
      const user: AuthUser = JSON.parse(userFound);
      this.user.next(new AuthUser(user.id, user.email, JSON.parse(token!)));
    }
  }
}
