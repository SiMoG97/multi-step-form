import * as z from "zod";

const formSchema = z.object({
  fullName: z
    .string()
    .min(6, { message: "invalid name!" })
    .max(40, { message: "Name is too long!" }),
  email: z.string().email(),
  phoneNumber: z.string().regex(new RegExp(/^\+?[0-9][0-9]{7,14}$/), {
    message: "Invalid phone number",
  }),
  portfolioGithubLink: z.string(),
  skillLevel: z.string(),
  challengePref: z.string().array().nonempty(),
});

export type FormInputsT = z.infer<typeof formSchema>;

export default formSchema;
