import prisma from "../../prisma/db";
class UserService {
  static async createUser(data: { email: string; name: string }) {
    const user = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
      },
    });
    return user;
  }
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
  static async update(data: { email?: string; name?: string }, id: number) {
    const user = await prisma.user.update({
      where: { id },
      data,
    });
    return user;
  }
}

export default UserService;
