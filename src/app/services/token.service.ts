import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  private readonly TOKEN_KEY = 'my_app_token';
  setToken(token: any): void {
    localStorage.setItem(this.TOKEN_KEY, token.accessToken);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  deleteToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
