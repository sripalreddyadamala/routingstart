import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { UserComponent } from "./user/user.component";
import { UserDetailComponent } from "./user/user-detail.component";
import { UserEditComponent } from "./user/user-edit.component";
import { HomeComponent } from "./home-component.component";
import { APP_ROUTE_PROVIDER} from "./app.routing";


@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserDetailComponent,
        UserEditComponent,
        HomeComponent
    ],
    imports: [BrowserModule,APP_ROUTE_PROVIDER],
    bootstrap: [AppComponent]
})

export class AppModule {}
