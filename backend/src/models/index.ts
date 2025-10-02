
import { type Dialect, Sequelize } from 'sequelize';
import {databaseConfig} from "../config/database.config.ts";
import config from '../config/config.ts';

export const sequelize = new Sequelize(databaseConfig.DB, databaseConfig.USER, databaseConfig.PASSWORD, {
  host: databaseConfig.HOST,
  dialect: config.dialect as Dialect
});