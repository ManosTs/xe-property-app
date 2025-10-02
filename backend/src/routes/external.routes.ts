import { getExternalAreas } from '../controllers/external.controller.ts';
import { Router } from 'express';

const router = Router();

router.get('/areas', getExternalAreas);

export default router;
