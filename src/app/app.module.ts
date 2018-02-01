import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHttpInterceptor } from './app-http-interceptor';
import { AppService } from './app.service';
import { TokenService } from './auth/_services/token.service';
import { AuthModule } from './auth/auth.module';
import { LayoutsModule } from './theme/layouts/layouts.module';
import { ThemeRoutingModule } from './theme/theme-routing.module';
import { ThemeComponent } from './theme/theme.component';
import { BrowserModule } from '@angular/platform-browser';
import { CpfMascaraPipe } from './pipe/cpf-mascara.pipe';

@NgModule({

  declarations: [
    AppComponent,
    ThemeComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    ThemeRoutingModule,
    AppRoutingModule,
    LayoutsModule,
    AuthModule,
    SharedModule

  ],

  providers: [
    AppService,
    TokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
