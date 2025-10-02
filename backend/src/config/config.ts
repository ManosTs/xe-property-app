import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  host: string;
  user: string;
  password: string;
  database: string;
  dialect: string;
}

const config: Config = {
  port: Number(process.env.PORT) ?? 8080,
  nodeEnv: process.env.NODE_ENV ?? 'development',
  host: process.env.HOST ?? 'localhost',
  user: process.env.USER ?? '',
  password: process.env.PASSWORD ?? '',
  database: process.env.database ?? '',
  dialect: process.env.DIALECT ?? '',
};

export default config;