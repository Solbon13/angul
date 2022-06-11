import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { first, map, Observable } from 'rxjs';
import { AuthService } from 'src/app/store/auth-store/services/auth.service';

@Injectable()
export class GuestGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsGuest();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsGuest();
  }

  private getIsGuest(): Observable<boolean>{
    return this.authService.isGuest$.pipe(
      first(),
      map(isGuest => {
        if (!isGuest) {
          this.router.navigateByUrl('/site')
        }
        console.log('guest')

        return isGuest
      })
    )
  }
}
