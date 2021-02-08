import { Router } from 'express';

import { OrphanagesController } from './controllers';

const routes = Router();

routes.post('/orphanages', OrphanagesController.create);

export const Routes = routes;
