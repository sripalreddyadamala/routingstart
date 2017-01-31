import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
    {{param}}
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {
  private subscription: Subscription;
  param:string;//store the query param of string in para,
  constructor(private route:ActivatedRoute){

    this.subscription = this.route.queryParams.subscribe(
      (queryParam:any) => this.param = queryParam['analytics']
      //take the param which is stored and access the object key. query param is an object passed in subscribe.

    );
  }
  ngOnDestroy(){

    this.subscription.unsubscribe();
}

}
