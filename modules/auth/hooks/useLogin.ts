"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues } from "@/types/AuthTypes";
// import useCookie from "react-use-cookie";
import { useRouter } from "next/navigation";
// import { useProfileStore } from "@/stores/useProfileStore";
import { login } from "@/services/AuthService";
import { toast } from "sonner";
import z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});

export function useLogin() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });


  const router = useRouter();


  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await login(data);
      const json = await res.json();
      console.log("Login response:", json);


      if (!res.ok) {
        throw new Error(json.message || "Login failed");
      }


      // redirect to dashboard
      router.push("/dashboard");

      // toast
      toast.success("Login successful");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return {
    ...form,
    onSubmit,
  };
}