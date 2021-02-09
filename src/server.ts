import express from 'express';
import 'express-async-errors';
import path from 'path';

import { ErrorHandler } from './errors/ErrorHandler';
import './database/connection';

import { Routes } from './Routes';

const app = express();

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(Routes);

app.use(ErrorHandler);

app.listen(3333);
