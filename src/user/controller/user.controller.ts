import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from '../entity/user.entity';
import { UserCreateRequest } from '../models/request/user-create.request';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async saveUser(@Body() request: UserCreateRequest): Promise<void> {
    await this.userService.save(request);
  }
}
