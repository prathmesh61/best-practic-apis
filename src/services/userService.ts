import prisma from "../../prisma/db";
import { registerUserType, updateUserType } from "../validations/index";

class UserService {
  static async users() {
    const users = await prisma.user.findMany({});
    return users;
  }
  static async userById(id: number) {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  }
  static async deleteUser(id: number) {
    await prisma.user.delete({ where: { id } });
    return "user successfully delete";
  }
  static async update(data: updateUserType, id: number) {
    const user = await prisma.user.update({
      where: { id },
      data,
    });
    return user;
  }
}

export default UserService;
