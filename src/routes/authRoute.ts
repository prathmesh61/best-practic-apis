import { Router } from "express";
import AuthController from "../controllers/authController";
import { verifyToken } from "../middlewares/verifyToken";
const router = Router();

// register user
router.post("/register", AuthController.register);
// login user
router.post("/login", AuthController.login);

export default router;
