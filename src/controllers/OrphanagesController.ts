import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { OrphanagesView } from '../views/OrphanagesView';

import Orphanage from './../models/Orphanage';

export const OrphanagesController = {
    index: async (req: Request, res: Response) => {
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find({ relations: ['images'] });

        res.status(200).json(OrphanagesView.renderMany(orphanages));
    },
    show: async (req: Request, res: Response) => {
        const { id } = req.params;
        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = await orphanagesRepository.findOneOrFail(id, { relations: ['images'] });

        res.status(200).json(OrphanagesView.render(orphanage));
    },
    create: async (req: Request, res: Response) => {
        const images = (req.files as Express.Multer.File[]).map(image => ({ path: image.filename }));

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
            images,
            latitude,
            longitude,
            instructions,
            opening_hours,
            open_on_weekends,
        });

        await orphanagesRepository.save(newOrphanage);

        return res.status(201).json(OrphanagesView.render(newOrphanage));
    }
}