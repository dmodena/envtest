import { Component, OnInit } from '@angular/core';
import { IUserLoginDto } from 'src/app/dto/user-login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginDto = { } as IUserLoginDto

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.userLoginDto)
  }

}
