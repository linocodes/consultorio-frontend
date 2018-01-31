import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { JwtHelper } from 'angular2-jwt';

import { JwtService } from './../_services/jwt.service';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    private _router: Router,
    private _jwtservice: JwtService,
    private _authenticationService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (!this._jwtservice.isAuthenticated()) {
      //this._authenticationService.refresh();
      //return true;
    }

    this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;

  }

}
