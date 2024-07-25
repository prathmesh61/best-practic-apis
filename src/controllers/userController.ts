import { Request, Response } from "express";
import UserService from "../services/userService";
import { registerUser, updateUser } from "../validations/index";
import prisma from "../../prisma/db";
import { ExtendedRequest } from "../middlewares/verifyToken";

class UserController {
  static async users(req: Request, res: Response) {
    try {
      const allUsers = await UserService.users();
      res.status(200).json(allUsers);
    } catch (error) {
      console.error(error, "error in getting users");
      res.status(400).json("error in getting users");
    }
  }
  static async userById(req: ExtendedRequest, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserService.userById(Number(id));
      res.status(200).json({
        user: user,
        email: req.user,
      });
    } catch (error) {
      console.error(error, "error in creating user");
      res.status(400).json("error in getting userBuId");
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const body = updateUser.safeParse(req.body);
      if (body.error) {
        throw new Error(body.error.message);
      }
      const emailAlreadyExist = await prisma.user.findUnique({
        where: { email: body.data.email },
      });
      if (emailAlreadyExist) {
        throw new Error("Email Already Taken.");
      }
      const { id } = req.params;
      const user = await UserService.update(body.data, Number(id));
      res.status(200).json(user);
    } catch (error) {
      console.error(error, "error in update user");
      res.status(400).json("error in update user");
    }
  }
}

export default UserController;
