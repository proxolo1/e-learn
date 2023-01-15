import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private api: AuthService, private router: Router) { }
  canActivate() {
    if (this.api.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['login'])
    return false;
  }


}
