import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThoughtsComponent } from './thoughts.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ThoughtsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThoughtsRoutingModule { }
