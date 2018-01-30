import { Injectable } from '@angular/core';
import { TOKEN_USER } from '../../app.api';
import { User } from '../_model/user.model';

@Injectable()
export class TokenService {

  private _user: User = null;
  private _token: string = null;

  constructor() { }

  getTokenUser(): User {
    let token_user: User = new User();
    const id = localStorage.getItem(`${TOKEN_USER}`);
    if (id !== null) {
      token_user = JSON.parse(id);
    }
    return token_user;
  }

  get user(): User {
    this._user = this.getTokenUser();
    return this._user;
  }

  set user(user: User) {
    localStorage.setItem(`${TOKEN_USER}`, JSON.stringify(user));
  }

  get token(): string {
    return this.getTokenUser().token;
  }

}
