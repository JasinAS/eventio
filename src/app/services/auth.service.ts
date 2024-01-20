import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public static readonly ACCESS_TOKEN = 'token';
  constructor() {}

  get hasPermission(): Observable<boolean> {
    if (!this.getToken()) {
      return of(false);
    }

    return of(true);
  }

  public getToken() {
    const token = localStorage.getItem(AuthService.ACCESS_TOKEN);
    if (!token) {
      return '';
    }
    return localStorage.getItem(AuthService.ACCESS_TOKEN);
  }
}
