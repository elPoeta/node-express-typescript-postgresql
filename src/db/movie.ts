import { pool } from './connection';
import { QueryResult } from 'pg';

export const getMovies = async (): Promise<any[] | any> => {
    const client = await pool.connect();
    try {
        const movies: QueryResult = await client.query('SELECT * FROM movie', []);
        return await movies.rows;
    } catch (error) {
        return new Error(`Error get movies ${error}`);
    } finally {
        client.release();
    }

}

