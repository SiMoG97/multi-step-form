import * as z from "zod";

// const phoneRegEx =
//   "/^s*(?:+?(d{1,3}))?[-. (]*(d{3})[-. )]*(d{3})[-. ]*(d{4})(?: *x(d+))?s*$/";

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
  challengePref: z.string().array(),
});

export type FormInputsT = z.infer<typeof formSchema>;

export default formSchema;
