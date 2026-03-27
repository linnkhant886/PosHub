import { LoginFormValues } from "@/types/AuthTypes";

export function login(payload: LoginFormValues): Promise<Response> {
  return new Promise((resolve, reject) => {
    const staticEmail = "admin@gmail.com";
    const staticPassword = "123456";

    if (
      payload.email === staticEmail &&
      payload.password === staticPassword
    ) {
      // mock success response
      resolve(
        new Response(
          JSON.stringify({
            success: true,
            user: {
              email: staticEmail,
              name: "Test User",
            },
          }),
          { status: 200 }
        )
      );
    } else {
      // mock error response
      resolve(
        new Response(
          JSON.stringify({
            success: false,
            message: "Invalid email or password",
          }),
          { status: 401 }
        )
      );
    }
  });
}