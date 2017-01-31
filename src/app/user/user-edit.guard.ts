import {CanDeactivate} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {observableToBeFn} from "rxjs/testing/TestScheduler";

export interface ComponentCanDeactivate{

  canDeactivate:() => boolean | Observable<boolean>;
}

export class UserEditGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate):Observable<boolean>| boolean {
return component.canDeactivate ? component.canDeactivate() : true;

  }

}
