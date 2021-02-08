import { Router } from 'express';
import multer from 'multer';

import { UploadConfig } from './config/UploadConfig';
import { OrphanagesController } from './controllers';


const upload = multer(UploadConfig);
const routes = Router();

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export const Routes = routes;
