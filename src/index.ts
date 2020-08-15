import express, { Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;
import { getMovies } from './db/movie';
const app: Application = express();

app.get('/', async (req, res) => {
    console.log(await getMovies());
    res.send('TEST...');
})
app.listen(PORT, () => {
    console.log(`Server ran on PORT 5000`);
});

process.on('unhandledRejection', () => {
    console.log('unhandledRejection')
})