import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transaction')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  income: number;

  @Column()
  outflow: number;

  @Column()
  description: string;
}
