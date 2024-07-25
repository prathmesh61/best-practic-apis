import { Request, Response } from "express";
import AuthService from "../services/authService";
import { loginUser, registerUser } from "../validations";
import Jwt from "jsonwebtoken";
class AuthController {
  static async register(req: Request, res: Response) {
    try {
      //zod validation
      const formBody = registerUser.safeParse(req.body);
      if (formBody.error) {
        throw new Error(formBody.error.message);
      }
      //  sending user data to register user
      const newUser = await AuthService.register(formBody.data);

      //JWT token
      const token = Jwt.sign(newUser.email, process.env.JWT_SECRET!);
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(201)
        .json(newUser);
    } catch (error) {
      console.error(error, "error in register user");
      res.status(400).json("error in register user");
    }
  }
  static async login(req: Request, res: Response) {
    try {
      //zod validation
      const formBody = loginUser.safeParse(req.body);
      if (formBody.error) {
        throw new Error(formBody.error.message);
      }
      //  sending user data to register user
      const user = await AuthService.login(formBody.data);
      const token = Jwt.sign(user.email, process.env.JWT_SECRET!);
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(201)
        .json(user);
    } catch (error) {
      console.error(error, "error in login user");
      res.status(400).json("error in login user");
    }
  }
}

export default AuthController;
