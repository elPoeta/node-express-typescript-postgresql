import express, { Application, Request, Response, NextFunction } from 'express';

export default (app: Application) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use((req: Request, res: Response, next: NextFunction) => {
        res.setHeader('charset', 'utf-8')
        next();
    });
}