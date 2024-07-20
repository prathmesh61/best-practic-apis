import { Router } from "express";
import UserController from "../controllers/userController";
const router = Router();

// create user
router.post("/user", UserController.createUser);
// get all users
router.get("/users", UserController.users);
// user by ID
router.get("/user/:id", UserController.userById);

export default router;
