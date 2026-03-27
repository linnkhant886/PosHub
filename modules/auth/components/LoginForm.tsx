"use client";

import { useState } from "react";
import { Controller } from "react-hook-form";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useLogin } from "../hooks/useLogin";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";



export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    onSubmit,
  } = useLogin();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-white">
      

      <FieldGroup className="gap-4">
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field className="grid gap-2" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email" className="text-sm text-foreground"> User Name</FieldLabel>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  aria-invalid={fieldState.invalid}
                  className="h-11 rounded-xl border-white/15 bg-white/[0.03] pl-10 placeholder:text-muted-foreground/80"
                />
              </div>
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field className="grid gap-2" data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="password" className="text-sm text-foreground">Password</FieldLabel>
                
              </div>

              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  {...field}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  aria-invalid={fieldState.invalid}
                  className="h-11 rounded-xl border-white/15 bg-white/3 pl-10 pr-10 placeholder:text-muted-foreground/80"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        
        <Button type="submit" className="h-11 mt-4 w-full rounded-xl font-semibold" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Spinner className="mr-2 size-4" />
              Logging in...
            </>
          ) : (
            "Log in"
          )}
        </Button>
      </FieldGroup>

      
    </form>
  );
}

export default LoginForm;
