import express from 'express';
import path from 'path';

import './database/connection';

import { Routes } from './Routes';

const app = express();

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(Routes);

app.listen(3333);
