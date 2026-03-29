import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  message: z
    .string()
    .min(1, "Please enter a message.")
    .max(1500, "Message is too long.")
    .refine(
      (value) => value.trim().split(/\s+/).filter(Boolean).length > 3,
      "Please enter more than 3 words.",
    ),
  company: z.string().optional(),
});

export type ContactSchemaInput = z.infer<typeof contactSchema>;
