import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Orphanage from './../models/Orphanage';

export const OrphanagesController = {
    create: async (req: Request, res: Response) => {
        const {
            name,
            about,
            latitude,
            longitude,
            instructions,
            opening_hours,
            open_on_weekends,
        } = req.body;

        const orphanagesRepository = getRepository(Orphanage);

        const newOrphanage = orphanagesRepository.create({
            name,
            about,
            latitude,
            longitude,
            instructions,
            opening_hours,
            open_on_weekends,
        });

        await orphanagesRepository.save(newOrphanage);

        return res.status(201).json(newOrphanage);
    }
}