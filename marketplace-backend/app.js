import express, { json } from 'express';
import cors from 'cors';

import 'dotenv/config'; // require('dotenv').config();
import { routes } from './src/modules/routes.js';

const app = express();

app.use(cors())
app.use(json());

app.get('/', (req, res) => {
  res.send('API Rafins is running...');
});

app.use('/', routes);



export { app }