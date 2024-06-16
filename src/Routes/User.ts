import { Router } from "express";
import { createVpnConfig, getVpnConfig } from "../Controllers/vpnController";
import { User } from "../Controllers/User";
import authMiddleware from "../Middleware/AuthMiddleware";

const router = Router();

router.get("/:id", authMiddleware, User.get);
router.get("/all", authMiddleware, User.getAll);
router.post("/", authMiddleware, User.create);
router.delete("/:id", authMiddleware, User.delete);
router.patch("/:id", authMiddleware, User.update);

export default router;
