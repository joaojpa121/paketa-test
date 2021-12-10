import { MigrationInterface, QueryRunner } from 'typeorm';

export class UniqueLogin1639095571306 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'alter table public."user" add constraint uk_unique_login unique (login)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'alter table public."user" drop constraint uk_unique_login',
    );
  }
}
