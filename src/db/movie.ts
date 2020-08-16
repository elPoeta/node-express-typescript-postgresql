import { pool } from './connection';
import { QueryResult, PoolClient } from 'pg';

export const fetchMovies = async (): Promise<any> => {
    const client: PoolClient = await pool.connect();
    const movies: QueryResult | any = await client.query('SELECT * FROM movie', [])
        .catch(e => { return { error: true, message: `${e}`, data: [] } })
        .finally(() => client.release());
    return movies.rows !== undefined ?
        { error: false, message: "Ok", data: movies.rows } :
        movies;
}

