import { Router } from 'express';
import { createVpnConfig, getVpnConfig } from '../controllers/vpnController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post('/', authMiddleware, createVpnConfig);
router.get('/:name', authMiddleware, getVpnConfig);

export default router;