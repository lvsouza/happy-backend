import { Router } from 'express';

import { OrphanagesController } from './controllers';

const routes = Router();

routes.get('/orphanages', OrphanagesController.index);
routes.post('/orphanages', OrphanagesController.create);

export const Routes = routes;
