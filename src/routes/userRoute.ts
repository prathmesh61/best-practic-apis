import { Router } from "express";
import UserController from "../controllers/userController";
const router = Router();

// get all users
router.get("/users", UserController.users);
// user by ID
router.get("/user/:id", UserController.userById);
// update user
router.put("/user/:id", UserController.update);

export default router;
