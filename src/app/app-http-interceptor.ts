import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  HttpClient, HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpHeaders, HttpEventType, HttpResponse
} from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { API } from './app.api';
import { TokenService } from './auth/_services/token.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  private authHeaders: HttpHeaders;
  private api: string;

  constructor(private _tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('intercepted request ... Metodo(' + req.method + ') url (' + req.url + ')');

    this._setAuthHeaders(this._tokenService.token);
    this._addApi(req);

    const authReq = req.clone({
      headers: this.authHeaders,
      url: this.api

    });

    return next.handle(authReq).do(evt => {

      if (evt instanceof HttpResponse) {
        console.log('---> status:', evt.status);
        console.log('---> filter:', authReq.params.getAll);
        console.log(evt.body);
      }

    })
      .catch((error, caught) => {
        const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        console.log(error);
        return Observable.throw(error);
      }) as any;
  }

  private _setAuthHeaders(access_token: any, token_type = 'Bearer') {
    this.authHeaders = new HttpHeaders();
    this.authHeaders = this.authHeaders.append('Authorization', token_type + ' ' + access_token);
    this.authHeaders = this.authHeaders.append('Content-Type', 'application/json');
  }

  private _addApi(req: HttpRequest<any>) {
    this.api = `${API}${req.url}`;
  }

}



