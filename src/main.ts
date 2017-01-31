import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import {APP_ROUTE_PROVIDER} from './app/app.routing';
import  {UserDetailGuard}from './app/user/user-detail.guard';
import  {UserEditGuard}from './app/user/user-edit.guard';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule,[APP_ROUTE_PROVIDER,UserDetailGuard,UserEditGuard]);
