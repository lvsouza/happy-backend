import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

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

        const data = {
            name,
            about,
            images,
            latitude,
            longitude,
            instructions,
            opening_hours,
            open_on_weekends,
        };

        const validationShema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            about: Yup.string().required().max(300),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required(),
            })),
        });

        await validationShema.validate(data, { abortEarly: false });

        const orphanagesRepository = getRepository(Orphanage);

        const newOrphanage = orphanagesRepository.create(data);

        await orphanagesRepository.save(newOrphanage);

        return res.status(201).json(OrphanagesView.render(newOrphanage));
    }
}