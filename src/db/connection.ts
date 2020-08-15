import { Pool, PoolConfig } from 'pg';
const config: PoolConfig = {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT != undefined ? process.env.DB_PORT : '5432')
}
export const pool = new Pool(config);