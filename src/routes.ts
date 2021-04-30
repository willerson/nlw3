import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesControllers';

const routes = Router();

// MVC
// Model
// Views
// Controllers 01:04:09


routes.post('/orphanages', OrphanagesController.create);

export default routes;