import { registerAs } from '@nestjs/config';

export const configuration = registerAs('app', () => ({
  port: parseInt(process.env.MAIN_PORT, 10),
  database: {
    username: process.env.POSTGRESQL_USERNAME,
    password: process.env.POSTGRESQL_PASSWORD,
    host: process.env.POSTGRESQL_HOST,
    port: parseInt(process.env.POSTGRESQL_PORT, 10),
    dbName: process.env.POSTGRESQL_DB_NAME,
  },
}));
