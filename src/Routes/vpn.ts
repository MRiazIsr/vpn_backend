import { Router } from "express";
import { createVpnConfig, getVpnConfig } from "../Controllers/vpnController";
import authMiddleware from "../Middleware/AuthMiddleware";

const router = Router();

router.post("/", authMiddleware, createVpnConfig);
router.get("/:name", authMiddleware, getVpnConfig);

export default router;
