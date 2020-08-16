import { pool } from './connection';
import { QueryResult, PoolClient } from 'pg';

export const fetchMovies = async (): Promise<any[]> => {
    const client: PoolClient = await pool.connect();
    try {
        const movies: QueryResult = await client.query('SELECT * FROM movie', []);
        //const movies: QueryResult = await client.query("SELECT info -> 'title' AS title, info -> 'year' as year FROM movie order by year desc", []);
        return movies.rows;
    } catch (error) {
        return []
    } finally {
        client.release();
    }

}

