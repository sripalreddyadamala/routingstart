import { Component,OnDestroy } from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, ActivatedRoute}   from '@angular/router';
import { Router } from '@angular/router';
import {Subscription} from "rxjs/Rx"

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">home</button>
      <hr>
      {{id}}
      <hr>
       <router-outlet></router-outlet>
    `,
  directives:[ROUTER_DIRECTIVES]
})
export class UserComponent implements OnDestroy {
  id:string;
  private subscription:Subscription;
  //subscription is a type implemented by observable package imported from rxjs
constructor(private router:Router,private activatedRouter:ActivatedRoute){
  // this.id = activatedRouter.snapshot.params['id'];
  //when you create the component or constructor take the current state(activated route)
  //and extract parameter out of it
  this.subscription = activatedRouter.params.subscribe(
    (param: any) => this.id = param['id']

    // we are passing a  subscribe object of any type and access the object with key
  );
}

  onNavigate(){
this.router.navigate(['/'],{queryParams:{'analytics':100}});
//these will redirect to home button.

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

}
}
