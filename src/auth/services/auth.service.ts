import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/services/user.service';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.userService.findByLogin(login);
    const passHash = CryptoJS.HmacSHA1(pass, 'batata').toString();
    if (user && user.password === passHash) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.login, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
