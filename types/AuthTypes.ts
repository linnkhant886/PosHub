import z from "zod";
import { User } from "./UserTypes";
import { loginSchema } from "@/modules/auth/hooks/useLogin";

export type LoginFormValues = z.infer<typeof loginSchema>;


export type LoginResponse = {
  token: string;
  user: User;
};