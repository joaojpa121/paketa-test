import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Transaction1639085072561 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'transaction',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'date',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'income',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'outflow',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
      false,
    );
  }
  public async down(queryRunner: QueryRunner): Promise<any> {
    queryRunner.query(`DROP TABLE transaction`);
  }
}
