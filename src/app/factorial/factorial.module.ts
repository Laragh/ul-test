import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactorialRoutingModule } from './factorial-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FactorialRoutingModule
  ]
})
export class FactorialModule { }
