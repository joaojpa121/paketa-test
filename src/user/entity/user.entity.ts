import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as CryptoJS from 'crypto-js';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  birthDate: string;

  @BeforeInsert() async hashPassword() {
    this.password = CryptoJS.HmacSHA1(this.password, 'batata').toString();
  }
}
