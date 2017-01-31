import {Routes, RouterModule} from "@angular/router"
import {HomeComponent} from "./home-component.component";
import {USER_ROUTES} from "./user/user.route";
import {UserComponent} from "./user/user.component";

//App_Routes are  of type Routes and defined with array of objects
// angular 2 tells up on the which path property  what component you want to display
// path property for segments of url and component property will load the components.
const APP_ROUTES:Routes = [
  { path:'user/:id',component:UserComponent },
  // we are passing :id as a parameter
  { path:'user/:id',component:UserComponent ,children:USER_ROUTES},
  { path:'',component:HomeComponent }
];

//just we got routes here so we need to use built in router module to register with routes

export const  APP_ROUTE_PROVIDER = RouterModule.forRoot(APP_ROUTES);

