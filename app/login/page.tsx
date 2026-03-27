import { AuthLayout } from "@/modules/auth/components/AuthLayout"
import LoginForm from "@/modules/auth/components/LoginForm"

export const metadata = {
  title: "Sign In | POSHub",
  description: "Sign in to your POSHub account to manage your business",
}



export default async function LoginPage(
) {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Enter your credentials to access your account"
      
    >
      <LoginForm />
    </AuthLayout>
  )
}
