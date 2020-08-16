import { Router } from 'express';
import { getMovies, createMovie } from '../../controllers/movie';
const router = Router();

router.route('/')
    .get(getMovies)
    .post(createMovie);

export default router;