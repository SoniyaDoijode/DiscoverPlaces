import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {

    return this.authService.userIsAuthenticated.pipe(take(1), switchMap (isAuthenticated=>{
      if(!isAuthenticated){
        console.log("isAuthenticated False",isAuthenticated)
        return this.authService.autoLogin();
      }
      else{
        console.log("isAuthenticated true",isAuthenticated)
        return of(isAuthenticated) //gives new observable
      }
    }),tap(isAuthenticated =>{
      if (!isAuthenticated) {
        this.router.navigateByUrl("/auth");
      }
    }));
  }
}
