import { ErrorRequestHandler } from 'express';

export const ErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
}
