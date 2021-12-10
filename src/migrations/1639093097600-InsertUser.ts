import { MigrationInterface, QueryRunner } from 'typeorm';
import * as CryptoJS from 'crypto-js';

export class InsertUser1639093097600 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const passSuperHash = await CryptoJS.HmacSHA1(
      'supermaster',
      'batata',
    ).toString();
    await queryRunner.query(`INSERT INTO public."user"
        (login, "password", name, email, "birthDate")
        VALUES('super','${passSuperHash}', 'super', 'super@', '1900-01-01');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM public."user" WHERE login='super'`);
  }
}
