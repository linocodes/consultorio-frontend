import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/_guards/authguard.service';
import { ThemeComponent } from './theme.component';

const routes: Routes = [
  {
    'path': '',
    'component': ThemeComponent,
    'canActivate': [AuthGuard],
    'children': [
      {
        'path': 'index',
        'loadChildren': 'app/theme/pages/default/index/index.module#IndexModule'
      },
      /*
            {
              'path': 'inner',
              'loadChildren': '.\/pages\/default\/inner\/inner.module#InnerModule'
            },
            {
              'path': 'instituicao',
              'loadChildren': 'app/theme/pages/default/instituicao/instituicao.module#InstituicaoModule'
            },
            {
              'path': 'ide',
              'loadChildren': 'app/theme/pages/default/ide/ide.module#IdeModule'
            },

            {
              'path': 'profile',
              'loadChildren': '.\/pages\/default\/profile\/profile.module#ProfileModule'
            },
            {
              'path': '404',
              'loadChildren': '.\/pages\/default\/not-found\/not-found.module#NotFoundModule'
            },
            */
      {
        'path': '',
        'redirectTo': 'index',
        'pathMatch': 'full'
      }
    ]
  },
  {
    'path': '**',
    'redirectTo': '404',
    'pathMatch': 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
