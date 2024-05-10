import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { WinesRoutingModule } from './wines-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WinesRoutingModule,
    MatTableModule
  ]
})
export class WinesModule { }
