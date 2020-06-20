import { IUser } from '../models/user';

export interface IUserTokenDto {
  user: IUser
  token: string
}
