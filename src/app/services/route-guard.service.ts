import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthappService } from './authapp.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private AuthApp: AuthappService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(!this.AuthApp.isLogged()){
      this.route.navigate(["login"]);
      return false;
    }else{
      return true;
    }
  }
}
