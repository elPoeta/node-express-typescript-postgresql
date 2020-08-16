import movie from '../routes/api/movie';
import { Application } from 'express';
export default (app: Application) => {
    app.use('/api/v1/movie', movie);
}