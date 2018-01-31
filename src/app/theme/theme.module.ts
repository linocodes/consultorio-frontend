import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { DefaultComponent } from './pages/default/default.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [ThemeComponent, DefaultComponent]
})
export class ThemeModule { }
