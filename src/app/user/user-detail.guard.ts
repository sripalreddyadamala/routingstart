import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
export class UserDetailGuard implements CanActivate {
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>| boolean {
//TAKES TWO ARGUMENTS and gives currently activated router and router snapshot and this method  will retrurn boolean
    //then it will give the answer whether you want to load the router component
    return confirm('Are you sure?');
    //return true or false
  }

}
