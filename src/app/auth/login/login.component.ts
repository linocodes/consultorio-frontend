import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';
import { AlertComponent } from '../_directive/alert/alert.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  cpf = '01170476600';

  @ViewChild('alertSignin', { read: ViewContainerRef }) alertSignin: ViewContainerRef;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthenticationService,
    private _alertService: AlertService,
    private cfr: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    this._router.navigate([this.returnUrl]);
  }


  signin() {
    this.loading = true;
    this._authService.login(this.model.email, this.model.password).subscribe(
      data => {
        this._router.navigate([this.returnUrl]);
      },
      error => {
        this.showAlert('alertSignin');
        this._alertService.error(error);
        this.loading = false;
      });
  }

  showAlert(target) {
    this[target].clear();
    const factory = this.cfr.resolveComponentFactory(AlertComponent);
    const ref = this[target].createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

}
