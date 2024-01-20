import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuardService implements CanLoad {
  fullPathBeforeLogin: BehaviorSubject<any> = new BehaviorSubject('');

  constructor(private router: Router, private authService: AuthService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.hasPermission.pipe(
      take(1),
      tap((loggedIn) => {
        if (!loggedIn) {
          const fullPath = segments.reduce((path, currentSegment) => {
            return `${path}/${currentSegment.path}`;
          }, '');
          if (fullPath) {
            this.fullPathBeforeLogin.next(fullPath);
          }
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
