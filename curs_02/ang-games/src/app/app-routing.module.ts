import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X0Component } from './x0/x0.component';

const routes: Routes = [
  {
    path: 'x0',
    component: X0Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
