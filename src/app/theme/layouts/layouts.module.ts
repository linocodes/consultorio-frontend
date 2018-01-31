import { NgModule } from '@angular/core';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderBrandComponent } from './header-brand/header-brand.component';
import { HeaderTopbarComponent } from './header-topbar/header-topbar.component';
import { HorMenuComponent } from './hor-menu/hor-menu.component';
import { LogoCasaComponent } from './logo-casa/logo-casa.component';
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { SearchComponent } from './search/search.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { SharedModule } from '../../shared/shared.module';
import { DefaultComponent } from '../pages/default/default.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    DefaultComponent,
    AsideNavComponent,
    BreadcrumbComponent,
    FooterComponent,
    HeaderBrandComponent,
    HeaderTopbarComponent,
    HorMenuComponent,
    LogoCasaComponent,
    QuickSidebarComponent,
    ScrollTopComponent,
    SearchComponent,
    TooltipsComponent
  ],

  exports: [
    DefaultComponent,
    AsideNavComponent,
    BreadcrumbComponent,
    FooterComponent,
    HeaderBrandComponent,
    HeaderTopbarComponent,
    HorMenuComponent,
    LogoCasaComponent,
    QuickSidebarComponent,
    ScrollTopComponent,
    SearchComponent,
    TooltipsComponent
  ]


})
export class LayoutsModule { }
