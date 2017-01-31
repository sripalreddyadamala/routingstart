import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {ComponentCanDeactivate} from "./user-edit.guard";
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'app-user-edit',
    template: `
        <h3>User Edit</h3>
        <button (click)="done = true">done</button>
        <button class = "btn btn-alert" (click)="onnavigate()">Go home</button>
    `
})
export class UserEditComponent implements ComponentCanDeactivate {
  done = false;

constructor(private router:Router){}
  onNavigate(){
    this.router.navigate(['/']);
  }
  canDeactivate(): Observable<boolean> | boolean {
    if(!this.done){
      return confirm('Do you want to leave?');
    }
    return true;


}

}
