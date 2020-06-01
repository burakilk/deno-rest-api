import {ConnectionOptions} from 'https://deno.land/x/postgres/connection_params.ts';

const env = Deno.env;

const APP_HOST = env.get('APP_HOST') || '127.0.0.1';
const APP_PORT = env.get('APP_PORT') || 7700;
const API_VERSION = '/api/v1';

/**
 * Postgres Database Config
 */
const DB_CONFIG: ConnectionOptions = {
    hostname: Deno.env.get('DB_HOST') || 'localhost',
    port: +Deno.env.get('DB_PORT')! || 5432,
    user: Deno.env.get('DB_USER') || 'bilk',
    database: Deno.env.get('DB_DATABASE') || 'postgres',
    password: Deno.env.get('DB_PASSWORD') || '',
};

export {
    APP_HOST,
    APP_PORT,
    DB_CONFIG,
    API_VERSION
}
