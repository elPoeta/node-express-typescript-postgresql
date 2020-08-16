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

export const insertMovie = async (dataMovie: any): Promise<any> => {
    const client: PoolClient = await pool.connect();
    const movie: QueryResult | any = await client.query('INSERT INTO movie (info) values($1)', [dataMovie])
        .catch(e => { return { error: true, message: `${e}`, data: 0 } })
        .finally(() => client.release());
    const data = movie.rowCount !== undefined ?
        { error: false, message: "Ok", data: movie.rowCount } :
        movie;
    return data;
}

