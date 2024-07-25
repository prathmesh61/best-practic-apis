import prisma from "../../prisma/db";
import { loginUserType, registerUserType } from "../validations";
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
  static async login(data: loginUserType) {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!user) {
      throw new Error("User not exist.");
    }
    const isPassRight = await bcrypt.compare(data.password, user?.password);
    if (!isPassRight) {
      throw new Error("password or email wrong.");
    }
    return user;
  }
}
export default AuthService;
