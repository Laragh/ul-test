import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactorialComponent } from './factorial.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'factorial', component: FactorialComponent }
];

@NgModule({
  declarations: [FactorialComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class FactorialRoutingModule { }
