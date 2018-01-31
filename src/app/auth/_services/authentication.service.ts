import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { API_LOGIN_SISTEMA, API_ATUALIZA_TOKEN } from '../../app.api';
import { User } from '../_model/user.model';
import { TokenService } from './token.service';

/**
* This class provides the NameList service with methods to read names and add names.
*/
@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(username: string, password: string) {

    return this.http.post(`${API_LOGIN_SISTEMA}`, JSON.stringify({ cpf: username, senha: password }))
      .map((data: Response) => data);
    //const user: User = JSON.stringify(data);
    // if (user && user.token) {
    //this.tokenService.user(user);
    // }
    // });
  }

  logout() {
    this.tokenService.removeToken();
  }

  refresh() {
    //return this.http.post(`${API_ATUALIZA_TOKEN}`, null)
    //  .map((data: Response) => data);

  }

}
