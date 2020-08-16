import { Request, Response } from 'express'
import { MovieDB } from '../db/interface/movieInt';
import { fetchMovies } from '../db/movie';
export const getMovies = async (req: Request, res: Response): Promise<Response> => {
    try {
        const movies: MovieDB = await fetchMovies();
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).json({ error: true, message: "fail fetch movies", data: [] })
    }

}