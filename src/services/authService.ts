import prisma from "../../prisma/db";
import { registerUserType } from "../validations";
import bcrypt from "bcrypt";

class AuthService {
  static async register(data: registerUserType) {
    // password hashing
    const hashPassword = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: hashPassword,
      },
    });
    return user;
  }
}
export default AuthService;
