import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from '../entity/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  findAll(): Promise<Transaction[]> {
    return this.transactionRepository.find();
  }

  findOne(id: string): Promise<Transaction> {
    return this.transactionRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.transactionRepository.delete(id);
  }

  async save(data: any): Promise<void> {
    const user = this.transactionRepository.create(data);
    await this.transactionRepository.save(user);
  }
}
