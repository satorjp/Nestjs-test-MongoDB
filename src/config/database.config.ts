import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  uri: process.env.DB_HOST || 'mongodb://localhost:27017/nestjs',
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
  name: process.env.DB_NAME,
}));