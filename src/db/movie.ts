import { pool } from './connection';
import { QueryResult, PoolClient } from 'pg';
import { MovieDB } from './interface/movieInt'
export const fetchMovies = async (): Promise<MovieDB> => {
    const client: PoolClient = await pool.connect();
    const movies: QueryResult | any = await client.query('SELECT * FROM movie', [])
        .catch(e => { return { error: true, message: `${e}`, data: [] } })
        .finally(() => client.release());
    const data: MovieDB = movies.rows !== undefined ?
        { error: false, message: "Ok", data: movies.rows } :
        movies;
    return data;
}

