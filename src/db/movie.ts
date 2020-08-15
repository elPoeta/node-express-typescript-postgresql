import { pool } from './connection';
import { QueryResult } from 'pg';

export const getMovies = async (): Promise<any[] | any> => {
    const client = await pool.connect();

    const movies: QueryResult | any = await client.query('SELECT * FROM movie', [])
        .catch(e => { })
        .finally(() => client.release());

    return Array.isArray(movies.rows) ? movies.rows : movies;

}

