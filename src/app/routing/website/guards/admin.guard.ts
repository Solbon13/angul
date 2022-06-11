import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { first, map, Observable, of } from 'rxjs';
import { AuthService } from 'src/app/store/auth-store/services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsAdmin();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsAdmin();
  }

  private getIsAdmin(): Observable<boolean>{
    return this.authService.isAuth$.pipe(
      first(),
      map(isAdmin => {
        if (!isAdmin) {
          console.log('auth red')
          this.router.navigateByUrl('/auth')
      }
        console.log('auth', isAdmin)

        return isAdmin
      })
    )
  }
}
