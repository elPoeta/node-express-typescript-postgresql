import express, { Application } from 'express';

const app: Application = express();

app.get('/', (req, res) => {
    res.send('TEST...');
})
app.listen(5000, () => {
    console.log(`Server ran on PORT 5000`);
});
