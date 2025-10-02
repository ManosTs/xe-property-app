import config from '../config/config.ts';

export const databaseConfig = {
    HOST: config.host,
    USER: config.user,
    PASSWORD: config.password,
    DB: config.database
};