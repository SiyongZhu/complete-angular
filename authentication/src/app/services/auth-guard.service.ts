import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate(route, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn())
      return true
      console.log(state.url)
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url }})
      return false
    
  }
}
