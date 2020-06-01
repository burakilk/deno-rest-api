import {Client} from 'https://deno.land/x/postgres/mod.ts';
import {DB_CONFIG} from '../config/config.ts';

export const db: Client = new Client(DB_CONFIG);

try {
    await db.connect();
    console.log('Connection to Database');
} catch (error) {
    console.log('Connection error: ', error.stack);
    throw error;
}