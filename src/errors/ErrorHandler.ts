import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErros {
    [key: string]: string[];
}

export const ErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
    if (error instanceof ValidationError) {
        let errors: ValidationErros = {};

        error.inner.forEach(err => {
            if (err.path) {
                errors[err.path] = err.errors;
            }
        });

        return res.status(400).json({ message: 'Validation fails', errors });
    } else {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
