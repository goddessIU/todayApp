import express from 'express';
import homeRoute from './routes/homeRoute.mjs';

const app = express();

app.use('/index', homeRoute);
// app.use('/learn', )

app.listen(8800, () => {
    console.log('hello')
})