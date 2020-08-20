import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircuitsRoutingModule } from './circuits-routing.module';
import { CircuitsComponent } from './circuits.component';
import {NbAccordionModule, NbCardModule} from '@nebular/theme';



@NgModule({
  declarations: [CircuitsComponent],
  imports: [
    CommonModule,
    CircuitsRoutingModule,
    NbCardModule,
    NbAccordionModule,
  ]
})
export class CircuitsModule { }
