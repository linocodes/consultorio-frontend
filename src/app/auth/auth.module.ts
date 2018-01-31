import { NgModule } from '@angular/core';

import { LogoutComponent } from './logout/logout.component';
import { SharedModule } from './../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthenticationService } from './_services/authentication.service';
import { AlertComponent } from './_directive/alert/alert.component';
import { AuthGuard } from './_guards/authguard.service';
import { AlertService } from './_services/alert.service';
import { JwtService } from './_services/jwt.service';

@NgModule({

  imports: [
    SharedModule,
    AuthRoutingModule,
  ],

  providers: [
    AuthenticationService,
    AuthGuard,
    JwtService,
    AlertService
  ],

  declarations: [
    LogoutComponent,
    LoginComponent,
    AlertComponent
  ],

  entryComponents: [AlertComponent],
})
export class AuthModule { }
