import { z } from "zod";

export const registerUser = z.object({
  email: z.string().email({ message: "Email is required." }),
  name: z.string({ message: "name is required." }),
});

export type registerUserType = z.infer<typeof registerUser>;

export const updateUser = z.object({
  email: z.string().optional(),
  name: z.string().optional(),
});

export type updateUserType = z.infer<typeof updateUser>;