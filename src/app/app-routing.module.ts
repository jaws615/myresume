import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowMeComponent } from './show-me/show-me.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';


const routes: Routes = [
  { path: '', redirectTo: '/resumePanel', pathMatch: 'full' },
  { path: 'resume', component: ShowMeComponent },
  { path: 'resumePanel', component: ExpansionPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
