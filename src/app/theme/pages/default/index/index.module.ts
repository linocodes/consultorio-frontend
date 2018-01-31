import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { LayoutsModule } from '../../../layouts/layouts.module';

@NgModule({

  imports: [
    CommonModule,
    IndexRoutingModule,
    LayoutsModule
  ],

  declarations: [
    IndexComponent
  ]

})
export class IndexModule { }
