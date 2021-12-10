fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

fs.writeFile(
  'ormconfig.json',
  JSON.stringify(
    {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      synchronize: false,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
    },
    null,
    2,
  ),
  (err) => {
    if (err) return console.log(err);
    console.log('Ok');
  },
);
