import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { UserCreateRequest } from '../models/request/user-create.request';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  findByLogin(login: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ login });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async save(data: UserCreateRequest): Promise<void> {
    const user = this.usersRepository.create(data);
    await this.usersRepository.save(user);
  }
}
