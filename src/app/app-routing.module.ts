import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowMeComponent } from './show-me/show-me.component';


const routes: Routes = [
  { path: '', component: ShowMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
