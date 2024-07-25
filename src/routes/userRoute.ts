import { Router } from "express";
import UserController from "../controllers/userController";
import { verifyToken } from "../middlewares/verifyToken";
const router = Router();

// get all users
router.get("/users", UserController.users);
// user by ID
router.get("/user/:id", verifyToken, UserController.userById);
// update user
router.put("/user/:id", verifyToken, UserController.update);

export default router;
