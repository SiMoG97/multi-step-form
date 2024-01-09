import { useFormContext } from "react-hook-form";
import { Input } from "@components/formElements";
import { FormInputsT } from "@/formSchema";
import AnimatedDiv from "@components/AnimatedDiv";

export default function StepOne({
  direction,
  nextBtnRef,
}: {
  direction: number;
  nextBtnRef: React.RefObject<HTMLButtonElement>;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputsT>();
  return (
    <AnimatedDiv className="flex flex-col gap-7" direction={direction}>
      <div>
        <h2 className="mb-2 text-2xl font-medium">Personal Information</h2>
        <p className="text-sm text-myGray-500">
          Please provide your personal details so we can get to know you better.
        </p>
      </div>
      <div className="grid gap-x-10 gap-y-6 md:grid-cols-2 ">
        <Input
          label="Full Name"
          placeholder="Rishi Purwar"
          id="fullName"
          errorMessage={errors.fullName?.message}
          onKeyUp={(e) => {
            if (e.key === "Enter" && nextBtnRef.current) {
              e.preventDefault();
              nextBtnRef.current.click();
            }
          }}
          {...register("fullName")}
        />
        <Input
          type="email"
          label="Email Address"
          placeholder="name@email.com"
          id="emailAddress"
          errorMessage={errors.email?.message}
          onKeyUp={(e) => {
            if (e.key === "Enter" && nextBtnRef.current) {
              e.preventDefault();
              nextBtnRef.current.click();
            }
          }}
          {...register("email")}
        />
        <Input
          type="tel"
          label="Phone Number"
          placeholder="+91 1234567890"
          id="phoneNumber"
          errorMessage={errors.phoneNumber?.message}
          onKeyUp={(e) => {
            if (e.key === "Enter" && nextBtnRef.current) {
              e.preventDefault();
              nextBtnRef.current.click();
            }
          }}
          {...register("phoneNumber")}
        />
        <Input
          label="Portfolio/Github Link"
          placeholder="github.com/rishipurwar1"
          id="portfolioGithubLink"
          errorMessage={errors.portfolioGithubLink?.message}
          onKeyUp={(e) => {
            if (e.key === "Enter" && nextBtnRef.current) {
              e.preventDefault();
              nextBtnRef.current.click();
            }
          }}
          {...register("portfolioGithubLink")}
        />
      </div>
    </AnimatedDiv>
  );
}
