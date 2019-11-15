import { Router } from 'express';

import fotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', fotoController.store);

export default router;
