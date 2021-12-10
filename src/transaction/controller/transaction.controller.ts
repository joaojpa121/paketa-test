import { Controller, Get } from '@nestjs/common';
import { Transaction } from '../entity/transaction.entity';
import { TransactionService } from '../services/transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  getUsers(): Promise<Transaction[]> {
    return this.transactionService.findAll();
  }

  // @Post()
  // async saveUser(@Body() request: UserCreateRequest): Promise<void> {
  //   await this.userService.save(request);
  // }
}
