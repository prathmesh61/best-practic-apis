import { Request, Response } from "express";
import UserService from "../services/userService";
type UserBody = {
  email: string;
  name: string;
};
class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const userData: UserBody = req.body;
      const newUser = await UserService.createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error, "error in creating user");
      res.status(400).json("error in creating user");
    }
  }
  static async users(req: Request, res: Response) {
    try {
      const users = await UserService.users();
      res.status(200).json({
        message: "all users",
        users,
      });
    } catch (error) {
      console.error(error, "error in getting users");
      res.status(400).json("error in getting users");
    }
  }
  static async userById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserService.userById(Number(id));
      res.status(200).json(user);
    } catch (error) {
      console.error(error, "error in creating user");
      res.status(400).json("error in getting userBuId");
    }
  }
}

export default UserController;
