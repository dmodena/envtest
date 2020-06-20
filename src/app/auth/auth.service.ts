import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IUserLoginDto } from '../dto/user-login-dto';
import { IUserTokenDto } from '../dto/user-token-dto';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = `${environment.api.domain}/api/v1/auth/login`
  private userTokenDto = { } as IUserTokenDto

  constructor(private http: HttpClient) { }

  login(userLoginDto: IUserLoginDto) {
    return this.http.post<any>(this._loginUrl, userLoginDto)
  }
}
