import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { TokenService } from './token.service';

@Injectable()
export class JwtService {

  constructor(private _tokenService: TokenService) { }

  public isAuthenticated(): boolean {
    const token = this._tokenService.token;
    return tokenNotExpired(token);
  }

}


