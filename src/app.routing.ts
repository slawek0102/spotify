/**
 * Created by oem on 2016-12-30.
 */

import {Router, RouterModule} from '@angular/router';

import {AboutComponent} from './app/about/about.component';
import {SearchComponent} from './app/search/search.component';
import {ContactComponent} from './app/contact/contact.component';


export const routing = RouterModule.forRoot([
  {path:'', component: SearchComponent},
  {path:'about', component: AboutComponent},
  {path:'home', component: SearchComponent},
  {path:'contact', component: ContactComponent},
   {path:'**', component: SearchComponent},
]);

