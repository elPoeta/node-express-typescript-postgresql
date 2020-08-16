import express, { Application } from 'express';
import dotenv from 'dotenv';
import parser from './bootStrapApp/parser';
dotenv.config();

const app: Application = express();
parser(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server ran on PORT 5000`);
});

process.on('unhandledRejection', () => {
    console.log('unhandledRejection')
});