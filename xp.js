import { Router } from 'express';
import { getXP, postXP } from '../controllers/xpController.js';

const router = Router();
router.get('/', getXP);
router.post('/', postXP);
export default router;