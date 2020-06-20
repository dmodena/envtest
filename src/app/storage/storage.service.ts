import { Injectable } from '@angular/core';
import { IUserTokenDto } from '../dto/user-token-dto';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveUserTokenDto(userTokenDto: IUserTokenDto) {
    localStorage.setItem('userTokenDto_Email', userTokenDto.user.email)
    localStorage.setItem('userTokenDto_Username', userTokenDto.user.username)
    localStorage.setItem('userTokenDto_Role', userTokenDto.user.role.value)
    localStorage.setItem('userTokenDto_Token', userTokenDto.token)
  }

  getUserTokenDtoEmail() {
    return localStorage.getItem('userTokenDto_Email')
  }

  getUserTokenDtoUsername() {
    return localStorage.getItem('userTokenDto_Username')
  }

  getUserTokenDtoRole() {
    return localStorage.getItem('userTokenDto_Role')
  }

  getUserTokenDtoToken() {
    return localStorage.getItem('userTokenDto_Token')
  }

  isUserLoggedIn(): boolean {
    return this.getUserTokenDtoToken() != null
  }
}
