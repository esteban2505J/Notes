import { z } from "zod";

export const registerSchema = z.object({
  userName: z.string({
    required_error: "Username is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      required_error: "Invalid email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, { required_error: "Password must be  at least 6 characters" })
    .regex(
      /^(?=.*[A-Z])(?=.*\d).*$/,
      "Password must contain at least one capital letter and one number"
    ),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      required_error: "Invalid email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, { required_error: "Password must be  at least 6 characters" })
    .regex(
      /^(?=.*[A-Z])(?=.*\d).*$/,
      "Password must contain at least one capital letter and one number"
    ),
});
