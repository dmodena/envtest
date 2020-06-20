import { Component, OnInit } from '@angular/core';
import { IUserLoginDto } from 'src/app/dto/user-login-dto';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginDto = { } as IUserLoginDto

  constructor(private _authService: AuthService, private _storageService: StorageService, private _router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this._authService.login(this.userLoginDto)
      .subscribe(
        res => {
          this._storageService.saveUserTokenDto(res)
          this._router.navigate(['/home'])
        },
        err => console.error(err)
      )
  }
}
