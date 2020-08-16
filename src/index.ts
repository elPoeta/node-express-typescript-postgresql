import express, { Application } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import parser from './bootStrapApp/parser';
import routes from './bootStrapApp/route';
const app: Application = express();
parser(app);
routes(app);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server ran on PORT 5000`);
});

process.on('unhandledRejection', () => {
    console.log('unhandledRejection')
});