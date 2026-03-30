import { z } from "zod";

export const webinarRegistrationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  challenge: z.enum([
    "bad_personal_credit",
    "no_business_credit",
    "denied_for_funding",
    "just_starting",
    "other",
  ]).optional(),
  // honeypot — should be empty
  website: z.string().max(0, "Bot detected").optional(),
});

export type WebinarRegistrationInput = z.infer<typeof webinarRegistrationSchema>;
