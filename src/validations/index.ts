import { z } from "zod";

export const registerUser = z.object({
  email: z.string({ message: "Email is required." }),
  name: z.string({ message: "name is required." }),
  password: z.string().min(5, { message: "5 letter required." }),
});
export const loginUser = z.object({
  email: z.string({ message: "Email is required." }),
  password: z.string().min(5, { message: "5 letter required." }),
});

export type registerUserType = z.infer<typeof registerUser>;
export type loginUserType = z.infer<typeof loginUser>;

export const updateUser = z.object({
  email: z.string().optional(),
  name: z.string().optional(),
});

export type updateUserType = z.infer<typeof updateUser>;
