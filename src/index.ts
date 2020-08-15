import express, { Application } from 'express';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;

const app: Application = express();

app.get('/', (req, res) => {
    res.send('TEST...');
})
app.listen(PORT, () => {
    console.log(`Server ran on PORT 5000`);
});
