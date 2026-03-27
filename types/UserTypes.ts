// import { changePasswordFormSchema } from "@/modules/profile-information/components/ChangePasswordSection";
// import { profileEditFormSchema } from "@/modules/profile-information/components/EditProfileSection";
// import z from "zod";

export type User = {
  id: number;
  name: string;
  email: string;
  photo: string | null;
  email_verified_at: string | null;
  dateOfBirth?: string; // ISO string or yyyy-mm-dd
  phone?: string;
  gender?: string;
  created_at: string;
  updated_at: string;
  address: string;
};

// export type UserEditFormValues = z.infer<typeof profileEditFormSchema>;
// export type ChangePasswordFormValues = z.infer<typeof changePasswordFormSchema>