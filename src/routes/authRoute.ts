import { Router } from "express";
import AuthController from "../controllers/authController";
const router = Router();

// register user
router.post("/user", AuthController.register);

export default router;
