import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactGuard implements CanActivate, CanLoad {
  constructor(private readonly route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const valid = !!route.params['id']; // !!route.queryParams['makeAccessible'];
    debugger;
    if (!valid) {
      this.route.navigateByUrl('/404');
    }
    return valid;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const valid = route.data ? route.data['someData'] : false;
    if (!valid) {
      this.route.navigateByUrl('/404');
    }
    return valid;
  }
}
